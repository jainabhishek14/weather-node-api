const chai = require("chai")
const chaiHttp = require("chai-http")
const server = require("../server")

const should = chai.should()
chai.use(chaiHttp)

describe("Common", () => {

  describe("/GET ", () => {
    it("it should throw an error endpoint not found", (done) => {
      chai.request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(404)
          res.body.should.be.an("object")
          done()
        })
    })
  })

  describe("/POST ", () => {
    it("it should throw an error; Bad Request", (done) => {
      chai.request(server)
        .post("/")
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.be.an("object")
          res.body.should.have.property("message")
          res.body.message.should.be.a("string")
          res.body.message.should.be.eql("Bad Request. Header issue")
          done()
        })
    })
  })

  describe("/PUT ", () => {
    it("it should throw an error; Bad Request", (done) => {
      chai.request(server)
        .put("/")
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.be.an("object")
          res.body.should.have.property("message")
          res.body.message.should.be.a("string")
          res.body.message.should.be.eql("Bad Request. Header issue")
          done()
        })
    })
  })

  describe("/DELETE ", () => {
    it("it should throw an error endpoint not found", (done) => {
      chai.request(server)
        .delete("/")
        .end((err, res) => {
          res.should.have.status(404)
          res.body.should.be.an("object")
          done()
        })
    })
  })
})

describe("Weather EndPoints", () => {

  describe("/weather GET ", () => {
    it("it should throw an error endpoint not found", (done) => {
      chai.request(server)
        .get("/weather")
        .end((err, res) => {
          res.should.have.status(404)
          res.body.should.be.an("object")
          done()
        })
    })
  })

  describe("/weather PUT ", () => {
    it("it should throw an error; Bad Request", (done) => {
      chai.request(server)
        .put("/weather")
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.be.an("object")
          res.body.should.have.property("message")
          res.body.message.should.be.a("string")
          res.body.message.should.be.eql("Bad Request. Header issue")
          done()
        })
    })
  })

	/**
	 * Test /DELETE Route
	 */
  describe("/weather DELETE ", () => {
    it("it should throw an error endpoint not found", (done) => {
      chai.request(server)
        .delete("/weather")
        .end((err, res) => {
          res.should.have.status(404)
          res.body.should.be.an("object")
          done()
        })
    })
  })

  describe("/weather POST ", () => {
    it("it should throw an error; Bad Request", (done) => {
      chai.request(server)
        .post("/weather")
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.be.an("object")
          res.body.should.have.ownProperty("message")
          res.body.message.should.be.a("string")
          res.body.message.should.be.eql("Bad Request. Header issue")
          done()
        })
    })
  })
})

describe("Invalid inputs", () => {
  describe("Empty Post Request", () => {
    it("it should throw an error invalid inputs", (done) => {
      chai.request(server)
        .post("/weather")
        .send({})
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.be.an("object")
          res.body.should.have.ownProperty("message")
          res.body.message.should.be.a("string")
          res.body.message.should.be.eql("Invalid or missing locations")
          done()
        })
    })
  })

  describe("Sending `test` field in Post Request instead locations", () => {
    it("it should throw an error invalid inputs", (done) => {
      chai.request(server)
        .post("/weather")
        .send({"test": ["New Delhi"]})
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.be.an("object")
          res.body.message.should.be.eql("Invalid or missing locations")
          done()
        })
    })
  })

  describe("Sending empty locations field in Post Request", () => {
    it("it should throw an error invalid inputs", (done) => {
      chai.request(server)
        .post("/weather")
        .send({ "locations":  ""})
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.be.an("object")
          res.body.should.have.ownProperty("message")
          res.body.message.should.be.a("string")
          res.body.message.should.be.eql("Invalid or missing locations")
          done()
        })
    })
  })

  describe("Sending locations field as a string in Post Request", () => {
    it("it should throw an error invalid inputs", (done) => {
      chai.request(server)
        .post("/weather")
        .send({ "locations": "New Delhi" })
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.be.an("object")
          res.body.should.have.ownProperty("message")
          res.body.message.should.be.a("string")
          res.body.message.should.be.eql("Invalid or missing locations")
          done()
        })
    })
  })

  describe("Sending locations field as an object in Post Request", () => {
    it("it should throw an error invalid inputs", (done) => {
      chai.request(server)
        .post("/weather")
        .send({ "locations": {"New Delhi": "New Delhi"} })
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.be.an("object")
          res.body.should.have.ownProperty("message")
          res.body.message.should.be.a("string")
          res.body.message.should.be.eql("Invalid or missing locations")
          done()
        })
    })
  })

  describe("Sending locations field null in Post Request", () => {
    it("it should throw an error invalid inputs", (done) => {
      chai.request(server)
        .post("/weather")
        .send({ "locations": null })
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.be.an("object")
          res.body.should.have.ownProperty("message")
          res.body.message.should.be.a("string")
          res.body.message.should.be.eql("Invalid or missing locations")
          done()
        })
    })
  })

  describe("Sending locations field undefined in Post Request", () => {
    it("it should throw an error invalid inputs", (done) => {
      chai.request(server)
        .post("/weather")
        .send({ "locations": undefined })
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.be.an("object")
          res.body.should.have.ownProperty("message")
          res.body.message.should.be.a("string")
          res.body.message.should.be.eql("Invalid or missing locations")
          done()
        })
    })
  })

  describe("Sending locations field as a number in Post Request", () => {
    it("it should throw an error invalid inputs", (done) => {
      chai.request(server)
        .post("/weather")
        .send({ "locations": 1000 })
        .end((err, res) => {
          res.should.have.status(400)
          res.body.should.be.an("object")
          res.body.should.have.ownProperty("message")
          res.body.message.should.be.a("string")
          res.body.message.should.be.eql("Invalid or missing locations")
          done()
        })
    })
  })
})

describe("Valid Requests", () => {
  describe("Sending locations field as a single item of an array in Post Request", () => {
    it("it should send a valid response containing weather data", function (done) {
      this.timeout(10000)
      const locations = new Array("New Delhi")
      chai.request(server)
        .post("/weather")
        .send({ "locations": locations })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an("object")
          res.body.should.have.ownProperty("data")
          res.body.data.should.be.an("object")
          Object.keys(res.body.data).should.have.members(locations.map(location => location.toString()).sort())
          done()
        })
    })
  })

  describe("Sending locations field as a multiple items of an array in Post Request", () => {
    it("it should send a valid response containing weather data", function (done) {
      this.timeout(10000)
      const locations = new Array("New Delhi", 10001, "London", "Prague")
      chai.request(server)
        .post("/weather")
        .send({ "locations": locations })
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an("object")
          res.body.should.have.ownProperty("data")
          res.body.data.should.be.an("object")
          Object.keys(res.body.data).should.have.members(locations.map(location => location.toString()).sort())
          done()
        })
    })
  })
})
