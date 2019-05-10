import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


dotenv.config();

class Authenticate {
	//generate token
	static generateToken(payload) {
		//req.token = jwt.sign(req.body, process.env.JWT_SECRET_KEY, {expiresIn: '12h'});

   return jwt.sign({ payload }, process.env.JWT_SECRET_KEY, { expiresIn: '12h' });
    //return next();

  }

   //verify token
   static verifyToken(token) {
    return jwt.verify(token, process.env.JWT_SECRET_KEY);
  }
  // static tokenVerify(req, res, next) {
  //   const decode = jwt.verify(req.body.token, process.env.SECRET);
  //   if(!decode){
  //   	return return res.status(403).json({
  //       status: 403,
  //       error: 'Forbidden error',
  //     });
  //   }
  //   return next();
  // }

   //returns hashpassword
  static hashPassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  }

//compare password
static comparePassword(hashPassword, password) {
    return bcrypt.compareSync(password, hashPassword);
  }
}

export default Authenticate;