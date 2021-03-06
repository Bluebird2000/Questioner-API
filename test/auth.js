import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../api/server';

const should = chai.should();

chai.use(chaiHttp);


// describe('Authentication route', () => {
//   const userCredentials = {
//   email: 'tester@questioner.com',
//   password: 'default111',
// };
//   let token;
//   const randNum = Math.floor(Math.random() * 125);
//   const user = {
//     firstname: 'Ahmad',
//     lastname: 'Lateef',
//     othername: 'Olamilekan',
//     email: `test${randNum}@example.com`,
//     phoneNumber: '08097012219',
//     username: 'Bluebird2000',
//     password: 'default111',
//   };
//   before((done) => {
//     chai.request(app)
//       .post('/api/v1/auth/login')
//       .send(userCredentials)
//       .end((err, res) => {
//         if (err) throw err;
//         token = res.body.token;
//         res.should.have.status(200);
//         done();
//       });
//   });

  // it('should return status 201 and create a new user', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signup')
  //     .send(user)
  //     .end((err, res) => {
  //       res.should.have.status(201);
  //       res.body.data.should.be.a('array');
  //       done();
  //     });
  // });
  // it('should return status 409 if email already exist', (done) => {
  //   chai.request(app)
  //     .post('/api/v1/auth/signup')
  //     .send(user)
  //     .end((err, res) => {
  //       res.should.have.status(409);
  //       done();
  //     });
  // });
  // it('should return 200 status and login an existing user', (done) => {
  //   const loginInfo = {
  //     email: user.email,
  //     password: user.password,
  //   };
  //   chai.request(app)
  //     .post('/api/v1/auth/login')
  //     .send(loginInfo)
  //     .end((err, res) => {
  //       res.should.have.status(200);
  //       res.body.data.should.be.a('object');
  //       done();
  //     });
  // });
  // it('should return 404 if email provided for login does not exist', (done) => {
  //   const loginInfo = {
  //     email: `vidibon${randNum}@questioner.com`,
  //     password: user.password,
  //   };
  //   chai.request(app)
  //     .post('/api/v1/auth/login')
  //     .send(loginInfo)
  //     .end((err, res) => {
  //       res.should.have.status(404);
  //       done();
  //     });
  // });
  // it('should return 422 if user credentials are not valid', (done) => {
  //   const loginInfo = {
  //     email: user.email,
  //     password: `vidibon${randNum}`,
  //   };
  //   chai.request(app)
  //     .post('/api/v1/auth/login')
  //     .send(loginInfo)
  //     .end((err, res) => {
  //       res.should.have.status(422);
  //       done();
  //     });
  // });
// });
