const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 4000);

console.log('Running at Port 3000');

app.listen(3000, () => {
    console.log("Listening on Port 3000!")
});

