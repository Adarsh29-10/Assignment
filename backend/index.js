import express, { json } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import CONNECT_DB from './src/db/index.js'

import projectRouter from './src/routes/project.routes.js'
import clientRouter from './src/routes/client.routes.js'
import contactRouter from './src/routes/contact.routes.js'
import newsletterRouter from './src/routes/newsletter.routes.js'

dotenv.config()

const app = express();
const port = process.env.PORT || 8000  

app.use(cors({
    origin: [
        "http://localhost:5173",          
        process.env.FRONTEND_URL || "https://assignment-brown-pi.vercel.app" // production
    ],
    credentials: true
}))
app.use(express.json())


app.use('/api/project', projectRouter)
app.use('/api/client', clientRouter)
app.use('/api/contact', contactRouter)
app.use('/api/newsletter', newsletterRouter)


CONNECT_DB()
.then(()=>{
    app.listen(port, () => console.log(`Listening on port ${port}`))
})
.catch((error)=>{
    console.log('MONGO DB CONNECTION FAILED!', error);
})

