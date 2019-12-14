process.env.NODE_ENV = 'test';
import dotenv from 'dotenv';
import path from 'path';
const bluebird = require('bluebird');
// dotenv.config({ path: path.resolve('/Users/krish/workshops/mindtree-301-node/services/restaurant/test.env')});

// console.log('path is ', path.resolve('/Users/krish/workshops/mindtree-301-node/services/restaurant/test.env'))

// process.env.MONGO_URL="mongodb://localhost/mocha-test"

// process.env.MONGO_URL="mongodb://localhost/mocha-test"
import config from '../app/config';
console.log('***config', config);

import '../app/config/db';
import * as http from 'http';

import '../app/models/restaurant';

let mongoose = require("mongoose");

let Restaurant = mongoose.model("Restaurant");

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
var sinon = require('sinon');
var sinonTest = require('sinon-test');
var test = sinonTest(sinon);


import app from '../app';

let should = chai.should();
const expect = chai.expect;
const supertest = require('supertest');

import {getRestaurant} from '../app/services/restaurant';

// const apptest = supertest(http.createServer(app.callback()));


chai.use(chaiHttp);
//Our parent block
describe('Restaurant', () => {
    beforeEach((done) => { //Before each test we empty the database
        Restaurant.remove({}, (err) => { 
           done();         
        });     
    });
/*
  * Test the /GET route
  */
  describe('/GET /restaurants', () => {
      it('it should GET all the Restaurants', (done) => {
        chai.request(app)
            .get('/restaurants')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });




  describe('/POST /restaurants', () => {
    it('it should Create a restaurant', (done) => {
      let restaurant = {
        "name": "TEST-123",
        "location": {
            "type": "Point",
            "coordinates": [12.9716, 77.5946]
        },
        "city": "Bangalore",
        "cuisine": ["veg"],
        "budget": 250,
        "rating": 4.6,
        "menu": [ {"title": "Meal", "price": 250 } ]
    }

      chai.request(app)
          .post('/restaurants')
          .send(restaurant)
          .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              
              res.body.should.have.property('name');
              res.body.should.have.property('_id');
               res.body.should.have.property('name').eql('TEST-123');
              res.body.should.have.property('budget').eql(250);
              

            done();
          });
    });

});



describe('Test model ', function() {
    it('should be invalid if required prorperties are empty', function(done) {
        // var restaurant = new Restaurant( {
        //     location: {
        //         type: 'Point',
        //         coordinates: []
        //     }
        // }
        // );

        var restaurant = new Restaurant();

        restaurant.validate(function(err) {
            //err.errors.propertyname
            
           // expect(err).to.be.null;
             expect(err.errors).to.exist; // property name is not working
            done();
        });
    });


it('should call back with true when repost exists', test(function(done) {
    var responseObject = { name: 'foo' };
     this.stub(Restaurant, 'findOne').yields(null, responseObject);
  
      
    Restaurant.findOne({}, function(err, result){
        console.log(result)
        expect(result).to.have.property('name');

        expect(result.name).to.equal('foo');
 


        done();
    })
}));



it('should call mock test',  function(done) {
    var responseObject = { name: 'foo' };
   

   const findOneStub = sinon.stub(Restaurant, "findOne").yields(null, responseObject);

    Restaurant.findOne({}, function(err, result){
        console.log(result)
        expect(result).to.have.property('name');

        expect(result.name).to.equal('foo');

        // to release the stuff
        findOneStub.restore();

        done();
    })
});


it('should call service with getRestaurant with id',  function(done) {
    var responseObject = { id: '12345', name: 'foo' };
   

   const findByIdStub = sinon.stub(Restaurant, "findById").usingPromise(bluebird.Promise).resolves(responseObject);
     getRestaurant('12345')
    .then( result => {
        expect(result).to.have.property('name');
        expect(result.name).to.equal('foo');
        expect(result.id).to.equal('12345');
        // to release the stuff
        findByIdStub.restore();

        done();
    }) 
 
});



});
 



});