const passwordValidate = (req, res, next) => {
  const { password } = req.body;

  if (password.length < 6) return res.status(400).json({ message: "O campo 'password' deve ter pelo menos 6 caracteres" })

  next()
}

const validadeExist = (req, res, next) => {
  const { first_name, last_name, email, password } = req.body;

  if(!first_name || first_name === "") return res.status(400).json({ message: "Dados inválidos" })
  if(!last_name || last_name === "") return res.status(400).json({ message: "Dados inválidos" })
  if(!email || email === "") return res.status(400).json({ message: "Dados inválidos" })
  if(!password || password === "") return res.status(400).json({ message: "Dados inválidos" })

  next()
}

module.exports = {
  passwordValidate,
  validadeExist,
}