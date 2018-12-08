const assert = require('assert');
const marioChar = require('../models/marioChar');

describe('MongodB mocha test 1', function(){

    it('Saving a record', function(done){
        var char = new marioChar({
            weight: 80,
            name: 'Mario'
        });

        char.save(function(err, ch){ //then is used because save is an async fn but we want save and assert to be sync  
            if(err) throw err;
            assert(ch.isNew === false); //true means char is created. false means created and saved onto dB
            done(); //test done
        });
    });

});
