var supertest = require("supertest");
var should = require("should");

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
})