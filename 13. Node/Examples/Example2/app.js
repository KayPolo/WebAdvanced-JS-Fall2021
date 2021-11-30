let express = require('express');
let app = express();


app.get('/', (req, res)=>{
    res.send('This is simple!');
})

var PORT = 4444;
app.listen(PORT,()=>{
    console.log('Server is working!')
})
