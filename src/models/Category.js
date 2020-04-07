import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const categorySchema = new Schema({

  name:{
    type:String,
    default:''
  },
  description:{ // ccs title
    type: String,
    default: ''
  },
  importanceLevel:{ // if zero, does not belongs to a group, its will go to bottom
    type: Number,
    default: 0
  },
  fontColor:{
    type: String,
  },
  borderColor:{
    type: String,
  },
  backgroundColor:{
    type: String,
  },
  public: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    dafault: Date.now()
  },
  updated_at: {
    type: Date,
    dafault: Date.now()
  },
  delete_at: {
    type: Date
  },
  created_by: {
    type: String,
    default: ''
  },
});


const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;