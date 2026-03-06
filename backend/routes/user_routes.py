from flask import Blueprint, jsonify, request
from models.user import User
from extensions.db import db

user_blueprint = Blueprint('users', __name__)

@user_blueprint.route('/', methods=['GET'])
def get_Users():
    users = User.query.all()
    users_return = []
    for user in users: users_return.append({"id":user.id, "username":user.username})
    return jsonify(users_return)

@user_blueprint.route('/<int:id>', methods=['GET'])
def get_User(id):
    user = User.query.get(id)
    if user is None: return "Invalid user", 400
    return jsonify({"id": user.id, "username": user.username})

@user_blueprint.route('/', methods=['POST'])
def create_User():
    data = request.get_json()
    if data is None: return "Invalid input", 400
    user = User(username=data['username'])
    db.session.add(user)
    db.session.commit()
    return "Successfully created a User", 200

@user_blueprint.route('/<int:id>', methods=['DELETE'])
def delete_User(id):
    user = User.query.get(id)
    if user is None: return "Invalid user", 400
    db.session.delete(user)
    db.session.commit()
    return "Successfully deleted user", 200

@user_blueprint.route('/<int:id>', methods=['PUT'])
def update_User(id):
    data = request.get_json()
    if data is None: return "Invalid input", 400
    user = User.query.get(id)
    if user is None: return "Invalid user", 400
    user.username = data["username"]
    db.session.commit()
    return "Successfully updated user", 200

