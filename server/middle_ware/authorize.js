import Authenticate from './authenticate';

const { verifyToken } = Authenticate;

class Authorize {

static verifyUser(req, res, next) {
    try {
      const tokenGen = req.headers.authorization.split(' ')[1];
      const decode = verifyToken(tokenGen);

      if (!decode.payload.id) {
        return res.status(403).send({
          status: 403,
          error: 'Only users with valid authentication can access this page',
        });
      }
      return next();
    } catch (error) {
      return res.status(401).send({
        status: 401,
        error: 'Invalid token',
      });
    }
  }



 static verifyAdmin(req, res, next) {
    try {
    	const tokenGen = req.headers.authorization.split(' ')[1];
        const decode = verifyToken(tokenGen);

        if (decode.payload.isAdmin === false) {
        return res.status(403).send({
          status: 403,
          error: 'you do not have the authorization to access this page',
        });
      }

      return next();
    } 
    catch (error) {
      return res.status(401).send({
        status: 401,
        error: 'Invalid token',
      });
    }
  }


}
export default Authorize;