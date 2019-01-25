var chai = require('chai'),
		chaiHttp = require('chai-http'),
		app = require('./../server'),
		should = chai.should();

chai.use(chaiHttp);

describe("Users", function() {
	it('should list ALL data /users GET', function(done) {

		// positive case
		chai.request(app)
		.get('/users')
		.end(function (err, res) {
			res.should.have.status(200);
			res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('status').eql(200);

      console.log(res.body.should.have.property('data'));
      // res.body.should.have.property('status').eql('200');
      // res.body.should.have.property('data');

			done();
		})
	});


  it('should list a SINGLE blob on /blob/<id> GET');
  it('should add a SINGLE blob on /blobs POST');
  it('should update a SINGLE blob on /blob/<id> PUT');
  it('should delete a SINGLE blob on /blob/<id> DELETE');
})