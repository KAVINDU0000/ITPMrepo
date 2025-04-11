const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },  
    breed: { type: String, required: true },        
    age: { type: Number, required: true },          
    symptoms: { type: String, required: true },     
    behavior: { type: String, required: true },     
  },
  { timestamps: true }  
);

module.exports = mongoose.model('Pet', PetSchema); 