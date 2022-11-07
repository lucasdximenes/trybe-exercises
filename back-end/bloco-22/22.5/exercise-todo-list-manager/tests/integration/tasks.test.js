const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const connection = require("../../src/model/connection");
const app = require("../../src/app");

const { expect } = chai;

chai.use(chaiHttp);

const { taskList } = require("../mocks");

describe("Testing tasks routes", function () {
  describe("Testing GET routes", function () {
    it("Should return a list of all tasks", async function () {
      sinon.stub(connection, "execute").resolves([taskList]);

      const response = await chai.request(app).get("/tasks");

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(taskList);
    });

    it("Should return a task by id", async function () {
      sinon.stub(connection, "execute").resolves([[taskList[0]]]);

      const response = await chai.request(app).get("/tasks/1");

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal([taskList[0]]);
    });

    it("Should return a 404 status code when task does not exist", async function () {
      sinon.stub(connection, "execute").resolves([[]]);

      const response = await chai.request(app).get("/tasks/1");

      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({ message: "Not found" });
    });

    afterEach(sinon.restore);
  });

  describe("Testing POST routes", function () {
    it("Should create a new task", async function () {
      sinon.stub(connection, "execute").resolves();

      const response = await chai
        .request(app)
        .post("/tasks")
        .send({ title: "Test", description: "Test" });

      expect(response.status).to.be.equal(201);
    });

    it("Should return an error if title is not provided", async function () {
      const response = await chai
        .request(app)
        .post("/tasks")
        .send({ description: "Test" });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({
        message: "title and description are required",
      });
    });

    it("Should return an error if description is not provided", async function () {
      const response = await chai
        .request(app)
        .post("/tasks")
        .send({ title: "Test" });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({
        message: "title and description are required",
      });
    });

    afterEach(sinon.restore);
  });

  describe("Testing PUT routes", function () {
    it("Should update a task", async function () {
      sinon.stub(connection, "execute").resolves([[taskList[0]]]);

      const response = await chai
        .request(app)
        .put("/tasks/1")
        .send({ title: "Test", description: "Test" });

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal({
        title: "Test",
        description: "Test",
      });
    });

    it("Should return an error if title is not provided", async function () {
      sinon.stub(connection, "execute").resolves([[taskList[0]]]);

      const response = await chai
        .request(app)
        .put("/tasks/1")
        .send({ description: "Test" });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({
        message: "title and description are required",
      });
    });

    it("Should return an error if description is not provided", async function () {
      sinon.stub(connection, "execute").resolves([[taskList[0]]]);

      const response = await chai
        .request(app)
        .put("/tasks/1")
        .send({ title: "Test" });

      expect(response.status).to.be.equal(400);
      expect(response.body).to.be.deep.equal({
        message: "title and description are required",
      });
    });

    it("Should return an error if task does not exist", async function () {
      sinon.stub(connection, "execute").resolves([[]]);

      const response = await chai
        .request(app)
        .put("/tasks/1")
        .send({ title: "Test", description: "Test" });

      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({ message: "Not found" });
    });

    afterEach(sinon.restore);
  });

  describe("Testing DELETE routes", function () {
    it("Should delete a task", async function () {
      sinon.stub(connection, "execute").resolves([[taskList[0]]]);

      const response = await chai.request(app).delete("/tasks/1");

      expect(response.status).to.be.equal(204);
    });

    it("Should return an error if task does not exist", async function () {
      sinon.stub(connection, "execute").resolves([[]]);

      const response = await chai.request(app).delete("/tasks/1");

      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal({ message: "Not found" });
    });

    afterEach(sinon.restore);
  });
});
