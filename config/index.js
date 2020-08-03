var configValues = require('./config');
module.exports={
    getDbConnectionString: ()=>{
        
        return "mongodb+srv://"+configValues.uname+":"+configValues.pwd+"@cluster0.e8pwt.mongodb.net/nodetodosample?retryWrites=true&w=majority"
    }
}