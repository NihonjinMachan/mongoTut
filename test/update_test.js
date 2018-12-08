const assert = require('assert');
const marioChar = require('../models/marioChar');

describe('MongodB mocha test 4', function(){
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
    
    it('Updating a record', function(done){
        marioChar.findOneAndUpdate({name:'Mario'}, {name:'Luigi'}, {useFindAndModify: false}, function(){
            marioChar.findOne({_id:char._id}, function(err, data){
                if(err) throw err;
                assert(data.name === 'Luigi');
                done();
            });
        });
    });

    it('Increments records by 1', function(done){
        marioChar.updateMany({}, {$inc: {weight : 1}}, function(){ //1 used here to say that we want to increment by 1, use -1 to decrement by 1
            marioChar.findOne({name:'Mario'}, function(err, data){
                if(err) throw err;
                assert(data.weight === 81);
                done();
            });
        });
    });

});
