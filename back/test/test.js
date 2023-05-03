// process.env.NODE_ENV = 'test';

// const chai = require('chai');
// const sinon = require('sinon');
// // const sinonChai = require('sinon-chai');
// // const chaiHttp = require('chai-http');

// chai.use(sinonChai);
// chai.use(chaiHttp);

// global.chai = chai;
// global.sinon = sinon;
// global.expect = chai.expect;










// const app = require('../index.js');
// const request = require('supertest');
// const agent = request.agent(app);
// const chai = require('chai');
// const expect = chai.expect;
// chai.use(require('chai-http'));


// describe('GET /test', () => {
//   it('should return a list of products', async () => {
//     const response = await agent.get(`/test`);
//     expect(response.status).to.equal(200);
//   });
// });






// const app = require('../index');
// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const expect = chai.expect;

// chai.use(chaiHttp);

// describe('GET /test', () => {
//   it('should return a list of products', (done) => {
//     chai.request(app)
//       .get('/test')
//       .end((err, res) => {
//         expect(res).to.have.status(200);
//         done();
//       });
//   });
// });








// describe('GET /products', () => {
//   it('should return a list of products', async () => {
//     const response = await request.get('/products/');

//     expect(response.status).to.equal(200);
//     expect(response.body).to.have.property('products');
//     expect(response.body.products).to.be.an('array');
//   });
// });

// describe('GET /products', () => {
//     it('should return a list of products', async () => {
//       const response = await agent.get(`/products`); // utilisez le nouveau port ici
  
//       expect(response.status).to.equal(200);
//     });
//   });

// describe('GET /test', () => {
//   it('should return a list of products', async () => {
//     const response = await agent.get(`/test`);
//     expect(response.status).to.equal(200);
//   });
// });







// const mongoose = require("mongoose");
// const request = require("supertest");
// const app = require("../app");

// require("dotenv").config();



// const request = require('supertest');
// const app = require('../index');

// describe('Test endpoints', () => {
//   it('GET /test should return 200', async () => {
//     const response = await request(app).get('/test');
//     expect(response.status).toBe(200);
//   });
// });

// it('GET /data should return an array of objects', async () => {
//   const response = await request(app).get('/products');
//   expect(response.status).toBe(200);
//   expect(Array.isArray(response.body)).toBe(true);
//   // expect(response.body[0]).toHaveProperty('id');
//   // expect(response.body[0]).toHaveProperty('name');
// });



// test.js
const request = require('supertest');
const app = require('../index');

describe('Test endpoints', () => {
  it('GET /test 1 should return 200', async () => {
    const response = await request(app).get('/products');
    expect(res.body.length).toBeGreaterThan(0);
    expect(response.status).toBe(200);
  });
});

// // spécifier un port différent pour les tests
// const testPort = 5001;
// const testServer = app.listen(testPort);

// // exécuter les tests
// describe('Test endpoints with separate server', () => {
//   it('GET /test 2 should return 200', async () => {
//     const response = await request(`http://localhost:${testPort}`).get('/test');
//     expect(response.status).toBe(200);
//   });
// });

// // fermer le serveur de test après les tests
// afterAll(() => {
//   testServer.close();
// });

