import bcrypt from 'bcrypt'

const hashPassword = async pw => {
  const salt = await bcrypt.genSalt(12)
  const hash = await bcrypt.hash(pw, salt)
  console.log(salt)
  console.log(hash)
}

const login = async (pw, hashedPassword) => {
  const result = await bcrypt.compare(pw, hashedPassword)
  if (result) {
    console.log('Loged you in successfully.')
  } else {
    console.log('incorrect')
  }
}

hashPassword('monkey')
// login('monkey', '$2b$12$oGMgQCP33JhUFea2.U4X5uazQ.PZj.uFrw64vSFpVhivXyWGBDH4m')
