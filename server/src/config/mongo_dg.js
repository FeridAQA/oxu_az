const dotenv = require('dotenv/config')
const { default: mongoose } = require('mongoose')

const db_connet=async ()=>{ 
    await mongoose.connect(process.env.DB_connet)
    .then(()=>{
        console.log('DB connet sucsses');
    })
    .catch((error)=>{
        console.log(`db not connet erorr =>${error}`);
    })
}
module.exports = {db_connet}