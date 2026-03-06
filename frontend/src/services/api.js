const api_link = "http://127.0.0.1:5000"

const getUsers = async () => {
  let res = await fetch(api_link)
  let data = await res.json()
  return data
}
const createUser = async (data) => {
  await fetch(api_link, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}
const updateUser = async (id,data) => {
  await fetch((api_link + "/" + id), {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
}
const deleteUser = async (data) => {
  await fetch((api_link + "/" + data), {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

}

let api = {getUsers, createUser, updateUser, deleteUser};

export default api;
