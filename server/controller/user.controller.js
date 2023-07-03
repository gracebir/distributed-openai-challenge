const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const UserModel = require('../models/UserModel')
dotenv.config()

const register = async (req, res) => {
    const { name, email, password } = req.body
    if(!name | !email | !password) return res.json({ msg: 'please fill all fields'})

    const user = await UserModel.findOne({email})
    if(user) return res.status(502).json({msg: 'user already exists'})
    const newUser = new UserModel({
        name,
        email, 
        password
    })
    bcrypt.genSalt(10, (err, salt)=> {
        bcrypt.hash(password, salt, (err, hash)=> {
            if(err) throw err;
            newUser.password = hash
            newUser.save()
            .then(user => {
                jwt.sign(
                    {id: user.id},
                    process.env.secret_key,
                    {expiresIn: 3600},
                    (err, token) => {
                        if(err) throw err;
                        res.json({
                            user: {
                                token,
                                id: user.id,
                                name: user.name,
                                email: user.email
                            }
                        })
                    }
                )
            }).catch(err => console.log(err))
        })
    })
}


const login = (req,res) => {
    let { email , password} = req.body;
    if(!email | !password) return res.json({msg: 'Please provide the email and password !!!'});
    UserModel.findOne({email})
    .then(user => {
        if(!user) return res.status(502).json({msg:'User does not exist'});
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(401).json({msg:'Incorrect Password!!'});
            jwt.sign(
                {id: user.id},
                process.env.secret_key,
                {expiresIn: 3600},
                (err, token) =>{
                    if(err) throw err;
                    res.json({
                        user: {
                            token,
                            id: user.id,
                            name: user.name,
                            email: user.email

                        }
                    })
                }
            )

        })
    })
}


module.exports = {
    register,
    login
}