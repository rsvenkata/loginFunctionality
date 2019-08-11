var supertest = require("supertest");
var should = require("should");
const app = require('../../app')

var server = supertest.agent("http://localhost:5001");

describe("SAMPLE unit test",function(){
  // #1 should return home page
  it("should return home page",function(done){
    // calling home page
    server
    .get("/")
    // .expect("Content-type")
    // .expect(200) //This is HTTP response
    .end(function(err,res){
      res.status.should.equal(200)
      done()
    })
  })

  it("Registering an user", function (done) {
    // calling home page
     supertest(app).post('/register').send({
      name: 'Raghunath',
      email: 'email@email.com',
      password:'password',
      password2: 'password'
    }).expect(200)
    done()
  })

  it("Home page",function(done){
    // calling home page
    server
    .get("/")
    .end(function(err,res){
      res.status.should.equal(200)
    })
    done()
  })

  it("User login",function(done){
    server.post('/users/login')
      .send({
      email: 'asdf10@gmail.com',
      password: 'password'
      })
      .set('Authorization', ``)
      .expect(209)
      done()
  })

})