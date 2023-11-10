import express from 'express';

import dbconnect from './dbmodel/mongoose-connection.js';

import { movie as moviemodel } from './dbmodel/model.js';

import cors from 'cors'

const app = express();

const port =process.env.PORT|| 4000;

app.use(express.static("public"));

app.use(cors());

app.use(express.json());

await dbconnect();


///Adding Movies
app.post('/movies', async (req,res)=>{
    try{
        const movie = new moviemodel(req.body)
      await movie.save();
      res.send({msg:"movie created successfully"})
    }
    catch(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    } 
  });
  
  
  app.get('/movies',async (req,res)=>{
    try{
      res.send(await moviemodel.find())
    }
    catch(err){
      console.log(err);
      res.status(500).send('Internal Server Error');
    } 
  });


  app.listen(port, () => {
    console.log('Application Started on port 4000');
      });