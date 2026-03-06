from flask import Flask
from flask_cors import CORS
from extensions.db import db
from routes.user_routes import user_blueprint

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///skeleton.db'
CORS(app)
    
db.init_app(app)
app.register_blueprint(user_blueprint)


if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True)
