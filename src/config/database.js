import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/api-ynov')
    .then(()=> console.log('Successfully connected to database'))
    .catch((e)=> console.log(`Error during database connection : ${e}`))