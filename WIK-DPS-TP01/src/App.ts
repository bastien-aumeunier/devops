import * as dotenv from "dotenv"
import express from 'express'

const app = express();


dotenv.config();

app.listen(process.env.PING_LISTEN_PORT, () => {
    console.log('Lancement du server sur le port : ' + process.env.PING_LISTEN_PORT);
});


app.get('/ping', (req, res)=> {
    res.setHeader('Content-Type', 'application/json')
    res.send(req.headers).status(200)
})

app.get('*', (_, res)=> {
    res.send('').status(404)
});


