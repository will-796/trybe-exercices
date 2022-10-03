import chaiHttp from "chai-http";
import chai, { expect } from "chai";
import { it, describe } from "mocha";
import app from "../../src/app.js";
import * as fs from "fs";
import sinon from "sinon";
chai.use(chaiHttp);

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: "Lindt & Sprungli",
    },
    {
      id: 2,
      name: "Ferrero",
    },
    {
      id: 3,
      name: "Ghirardelli",
    },
  ],
  chocolates: [
    {
      id: 1,
      name: "Mint Intense",
      brandId: 1,
    },
    {
      id: 2,
      name: "White Coconut",
      brandId: 1,
    },
    {
      id: 3,
      name: "Mon Chéri",
      brandId: 2,
    },
    {
      id: 4,
      name: "Mounds",
      brandId: 3,
    },
  ],
});

describe("Testando a API Cacao Trybe", () => {
  beforeEach(function () {
    sinon.stub(fs.promises, "readFile").resolves(mockFile);
  });
  afterEach(function () {
    sinon.restore();
  });
  describe("Usando o método GET em /chocolates", () => {
    it("Testa se o status code do GET em /chocolates é igual a 200", async () => {
      const response = await chai.request(app).get("/chocolates");
      expect(response.status).to.be.equal(200);
    });
    it("Retorna a lista completa de chocolates!", async () => {
      const output = [
        { id: 1, name: "Mint Intense", brandId: 1 },
        { id: 2, name: "White Coconut", brandId: 1 },
        { id: 3, name: "Mon Chéri", brandId: 2 },
        { id: 4, name: "Mounds", brandId: 3 },
      ];
      const response = await chai.request(app).get("/chocolates");
      expect(response.body).to.deep.equal(output);
    });
  });
});
