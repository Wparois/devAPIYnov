import mongoose from 'mongoose'

const { Schema } = mongoose

const exempleSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    description: {
        type:String,
    },
    colors: {
        type:[String],
        required:true
    },
    price: {
        type:Number,
        required:true
    },

})

const Exemple = mongoose.model('Exemple', exempleSchema)

// Exemple.create({
//     name:"Test product",
//     description:"Lorem Ipsum folor sit amet",
//     colors:['black', 'red', 'grenn'],
//     price: 1000
// })

const findById = async ()=>{
    const exemple = await Exemple.findById('63721c307c995b7c5f7e6167')
    // console.log(`FIND BY ID ================ ${exemple}`);
}

const findAll = async ()=>{
    const exemples = await Exemple.find()
    // console.log(`FIND ALL ================== ${exemples}`);
}

const updateById = async ()=>{
    //Méthode 1 
    const exemple1 = await Exemple.findByIdAndUpdate('63721c307c995b7c5f7e6167', 
        {name:"Premier élément"},
        {runValidators:true})

    // //Méthode 2
    // const exemple2 = await Exemple.findById('63721c307c995b7c5f7e6167')
    // exemple2.name= "Modification"
    // exemple2.save();

    // //Méthode 3
    // const exemple3 = await Exemple.findById('63721c307c995b7c5f7e6167')
    // exemple3.set({
    //     name:"Modif 3"
    // })
    // exemple3.save()

    // console.log("UPDATE BY ID ==============", exemple1)
}

const deleteById = async () =>{
    const exemple = await Exemple.findByIdAndDelete('xxxx')
}

findById()
findAll()
// updateById()
// deleteById()

export default Exemple