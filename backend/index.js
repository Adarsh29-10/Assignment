import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import CONNECT_DB from './src/db/index.js'

dotenv.config()

const app = express();
const port = process.env.PORT || 8000  

app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Shree Ganesh')
})


CONNECT_DB()
.then(()=>{
    app.listen(port, () => console.log(`Listening on port ${port}`))
})
.catch((error)=>{
    console.log('MONGO DB CONNECTION FAILED!', error);
})

