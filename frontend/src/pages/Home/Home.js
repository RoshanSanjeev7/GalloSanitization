import './Home.css'
import api from '../../services/api'
import {useEffect, useState} from 'react';

const Home = () => {
  const [users,setUsers] = useState([]);

  const loadUsers = async () => {
    const users = await api.getUsers();
    setUsers(users)
  }

  useEffect(() => {
    loadUsers()
  }, []);


  const usersList = () => {
    let list = users.map(user => 
      <li key={user.id} style={{"display":"flex", "flexDirection":"row", "gap":"2em"}}>
        <div>
          {user.username}
        </div>
        <div>
          ID: {user.id}
        </div>
      </li>)
    return <ul>{list}</ul>
  }

  const buttonCreateUser = async () => {
    let username = document.getElementById("create").value;
    await api.createUser({"username":username});
    window.location.reload()
  }
  const buttonDeleteUser = async () => {
    let id = document.getElementById("del").value;
    await api.deleteUser(id);
    window.location.reload()
  }
  const buttonUpdateUser = async () => {
    let id = document.getElementById("updateID").value;
    let newuser = document.getElementById("newname").value;
    await api.updateUser(id, {"username":newuser});
    window.location.reload()
  }

  return (
    <div>
      <h1>Home</h1>

      <div>
        <h3>Create User:</h3>
        <div>
          <input id="create" placeholder='Enter a new Username'></input>
          <button onClick={buttonCreateUser}>Upload</button>
        </div>
      </div>

      <div>
        <h3>Delete User:</h3>
        <div>
          <input id="del" placeholder='Enter User ID to Delete'></input>
          <button onClick={buttonDeleteUser}>Delete</button>
        </div>
      </div>

      <div>
        <h3>Update User:</h3>
        <div>
          <input id="updateID" placeholder='Enter User ID'></input>
          <input id="newname" placeholder='Enter new Username'></input>
          <button onClick={buttonUpdateUser}>Update</button>
        </div>
      </div>

      <div>
        <h3>Users:</h3>
        <div>{usersList()}</div>
      </div>
    </div>
  )
}

export default Home;
