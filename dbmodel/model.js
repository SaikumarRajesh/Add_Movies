import mongoose from "mongoose";

const  moviesschema = new mongoose.Schema({

   Movie_Id:{
    type:String,
    required:true
   },
   Movie_Name:{
    type:String,
    required:true
   },
   Movie_Image:{
    type:String,
    required:true
   },
   DateOfRelaease:{
    type:String,
    required:true
   }
}
);

const movie = mongoose.model("movies",moviesschema)

export {movie} ;
