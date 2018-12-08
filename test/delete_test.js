const assert = require('assert');
const marioChar = require('../models/marioChar');

describe('MongodB mocha test 3', function(){
    var char;

    //Since collection is cleared after every test, insert new data to find & delete
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
    
    it('Deleting a record', function(done){
        marioChar.findOneAndDelete({name:'Mario'}, function(){
            marioChar.findOne({name:'Mario'}, function(err, data){
                if(err) throw err;
                assert(data === null);
                done();
            });
        });
    });

});
