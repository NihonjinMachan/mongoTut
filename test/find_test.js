const assert = require('assert');
const marioChar = require('../models/marioChar');

describe('MongodB mocha test 2', function(){
    var char;

    //Since collection is cleared after every test, insert new data to find
    beforeEach(function(done){
        char = new marioChar({
            weight: 80,
            name: 'Mario'
        });

        char.save(function(err, ch){  
            if(err) throw err;
            done();
        });
    });
    
    it('Finding a record', function(done){
        marioChar.findOne({name:'Mario'}, function(err, data){
            if(err) throw err;
            assert(data.name === 'Mario');
            done();
        });
    });

    it('Finding a record by ID', function(done){
        marioChar.findOne({_id: char._id}, function(err, data){
            if(err) throw err;
            assert(data._id.toString() === char._id.toString());
            done();
        });
    });
});
