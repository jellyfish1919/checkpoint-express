const fs= require('fs')
function verify(req,res,next) {
    const hours = new Date ().getHours();
    const day = new  Date().getDate();
    if(hours> 9 && hours <= 17 && day <= 5){
        next()
    }
    else{
        fs.readFile('..PUBLIC/Pages/error.html ', (err, data )=> {
            })
    }

}
module.exports = verify;