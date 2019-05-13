import { Router } from 'express';
import Usercontroller from '../controller/users_controller';
import Loancontroller from '../controller/loans_controller';
import Repaymentcontroller from '../controller/repayments_controller';
import Validator from '../middle_ware/validate';
import Authenticate from '../middle_ware/authenticate';
import Authorize from '../middle_ware/authorize';
//import middleware from '../middle_ware/middleware';

const {
  usersValidator,
  loginValidator,
  loanApprovalValidator,
  loanValidator,
  loanQueryValidator,
  loanRepaymentValidator
} = Validator


const {
    createUsers,
    loginUser,
    adminVerifyUser
} = Usercontroller

const route = (app) => {
    app.get('/api/v1/users', Usercontroller.getUsers);

    app.post('/api/v1/auth/signup',usersValidator,createUsers);

    app.post('/api/v1/auth/signin',loginValidator, Usercontroller.loginUser);

    app.post('/api/v1/loans',loanValidator, Loancontroller.applyForLoan);

    app.post('/api/v1/loans/:id/repayment',loanRepaymentValidator ,Repaymentcontroller.postRepayment);

    app.patch('/api/v1/users/:email/verify' ,Usercontroller.adminVerifyUser);

    app.patch('/api/v1/loans/:id', Loancontroller.loanApproval);

    app.get('/api/v1/loans/:id/repayments', Repaymentcontroller.getRepaymentHistory);

    app.get('/api/v1/loans', Loancontroller.getAllLoans);

    app.get('/api/v1/loans?status=approved&repaid=false', Loancontroller.getAllLoans);

    app.get('/api/v1/loans?status=approved&repaid=true', Loancontroller.getAllLoans);

    app.get('/api/v1/loans/:id', Loancontroller.getSpecificLoan);
};



export default route;
// module.exports = route;
//userValidator.validateSignup,
