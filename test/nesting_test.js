const assert = require('assert');
const authorModel = require('../models/author');
const mongoose = require('mongoose');

describe('MongodB mocha test 5', function(){

    beforeEach(function(done){
        mongoose.connection.collections.authors.drop().then(function(){
            var author = new authorModel({
                name: 'Jeffrey Archer',
                books: [{title: 'Kane and Abel', pages: 400}]
                });
        
            author.save(function(err){
                if(err) throw err;
                done();
            });
        });
    });
    
    it('Finding a nested document', function(done){
        authorModel.findOne({name:'Jeffrey Archer'}, function(err, data){
            if(err) throw err;
            assert(data.books.length === 1);
            done();
        });
    });

    it('Adding a new book', function(done){
        authorModel.findOneAndUpdate({name:'Jeffrey Archer'}, {$push: {books: {title:'Sins of the father', pages: 500}}}, {useFindAndModify: false}, function(){
            authorModel.findOne({name:'Jeffrey Archer'}, function(err, data){
                if(err) throw err;
                assert(data.books[1].title === 'Sins of the father');
                done();
            });
        });
    });

});