var chai = require('chai'),
		chaiHttp = require('chai-http'),
		app = require('./../server'),
		should = chai.should();

const server = "http://localhost:8000";
chai.use(chaiHttp);

describe("Blobs", function() {
	it('should list ALL blobs on /blobs GET', function(done) {
		chai.request(app)
		.get('/users')
		.end(function (err, res) {
			res.should.have.status(200);
			res.should.be.json;
      res.body.should.be.a('object');
			done();
		})
	});
  it('should list a SINGLE blob on /blob/<id> GET');
  it('should add a SINGLE blob on /blobs POST');
  it('should update a SINGLE blob on /blob/<id> PUT');
  it('should delete a SINGLE blob on /blob/<id> DELETE');
})