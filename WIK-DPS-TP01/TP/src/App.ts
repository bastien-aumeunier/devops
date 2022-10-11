import * as dotenv from "dotenv"
import express from 'express'

const app = express();

const port = process.env.PING_LISTEN_PORT == null ? 8080 : process.env.PING_LISTEN_PORT

dotenv.config();

app.listen(port, () => {
    console.log('Lancement du server sur le port : ' + port);
});


app.get('/ping', (req, res)=> {
    res.json(JSON.stringify(req.headers)).status(200)
})

app.get('*', (_, res)=> {
    res.status(404)
    res.send(' ')
})

app.post('*', (_, res)=> {
    res.status(404)
    res.send(' ')
})


