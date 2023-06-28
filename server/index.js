const { Configuration, OpenAIApi} = require('openai')
const express = require('express')
const dotenv = require('dotenv')
const Message = require('./models/Message')
const {saveMessage, findMessageByUser} = require('./controller/message.controller')
const cors = require('cors')
dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
const port = process.env.PORT || 4000

const config = new Configuration({
    apiKey: process.env.api_key
})

const openai = new OpenAIApi(config)

app.post('/openai', async (req, res)=> {
    const { text, user } = req.body
    saveMessage(req, res);
    if(!text) return res.status(502).json({error:"message can't be empty"})
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${text}`,
        max_tokens: 2048,
        temperature: 1
    })

    const newMessage = new Message({
        text: completion.data.choices[0].text,
        isAi: true,
        user: user
    })

    await newMessage.save()

    res.json({
        completion: completion.data.choices[0].text
    })
})

app.get('/', (req, res)=> {
    res.json({msg:"OpenApi Chatbot"})
})

app.get('/messages/:user', findMessageByUser)

app.listen(port, ()=> console.log(`server runs on: http://localhost:${port}`))