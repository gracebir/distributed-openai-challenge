const Message = require('../models/Message')

function saveMessage(req, res){
    const {text, isAi, user} = req.body;
    console.log("????",text, isAi, user)
    const newMessage = new Message({
        text,
        isAi,
        user
    })
    newMessage.save()
    .then(message => res.json(message))
    .catch(error => console.log(error))
}

function findMessageByUser(req, res){
    const param = req.params.user
    Message.find({user: param})
    .then(messages => res.json(messages))
    .catch(error=> console.log(error))
}


module.exports = {
    saveMessage,
    findMessageByUser
}
