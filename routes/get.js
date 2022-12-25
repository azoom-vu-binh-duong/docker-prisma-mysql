export default (req, res) => {
  res.status(200).send('Welcome to server! To get users, use [GET] http://localhost:3001/users. To post random user, use post http://localhost:3001/users')
}