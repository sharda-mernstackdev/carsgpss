

const mongoose= require ('mongoose')

const connectDB=async ()=>{
    try {
        await mongoose.connect('mongodb+srv://akhilbhartiyapariwarparty:WE9wrMznK4ZDzywm@pranav.cc4la.mongodb.net/gpss')
        console.log('mongo connected');
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={connectDB}