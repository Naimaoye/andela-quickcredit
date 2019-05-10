/*
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/app');

chai.should();
chai.use(chaiHttp);

const signinUrl = '/api/v1/auth/signin';
const loanrepayUrl = '/api/v1/loans/1/repayment';
let currentToken;

describe('Test loan repayment', () => {
  describe(`POST ${loanrepayUrl}`, () => {
    const adminLogin = {
      email: 'wunmi@mail.com',
      password: 'password',
    };
    const amount = { paidAmount: 10000 };
    before((done) => {
      chai.request(server)
        .post(`${signinUrl}`)
        .send(adminLogin)
        .end((loginErr, loginRes) => {
          currentToken = `Bearer ${loginRes.body.data.token}`;
          done();
        });
    });
    it('should return all loan applications', (done) => {
      chai
        .request(server)
        .post(loanrepayUrl)
        .set('authorization', currentToken)
        .send(amount)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          res.body.data.should.have.property('paidAmount');
          res.body.data.should.have.property('createdOn');
          done();
        });
    });
  });
});
*/
