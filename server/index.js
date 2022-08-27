import express from 'express'
import bodyParser from 'body-parser'

import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'



const app = express();


app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))

app.use(cors())
 


mongoose
  .connect(
    'mongodb+srv://nurmizan:f563F23Wnd1TKuam@cluster0.s4eitg7.mongodb.net/?retryWrites=true&w=majority'
    // {
    //   userNewUrlPaser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // }
  )
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log('Server started'))
  })
  .catch((e) => {
    console.log('not connected');
  });

  const PORT = 5000; 