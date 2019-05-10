import userController from '../controller/users_controller';
import validator from '../middle_ware/validate';
import authenticate from '../middle_ware/authenticate';

const route = (app) => {
    app.get('/api/v1/users', userController.getUsers);
    app.post('/api/v1/auth/signup', userController.createUsers);
    app.post('/api/v1/auth/signin' , userController.loginUser);
};


export default route;
// module.exports = route;
//userValidator.validateSignup,
