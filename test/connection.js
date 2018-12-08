const mongoose = require('mongoose');

//mocha hook (before) to let mocha know to connect to dB before the tests 
before(function(done){
    //mongodb connection
    mongoose.connect('mongodb://localhost:27017/testDB', {useNewUrlParser:true});
    mongoose.connection.once('open', function(){
        console.log("Connection successful");
        done();
    }).on('error', function(error){
        console.log("Connection failed");
    });
});

//mocha hook (beforeEach) to let mocha know to clear the dB before each test
beforeEach(function(done){
    //collection drop
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
});


