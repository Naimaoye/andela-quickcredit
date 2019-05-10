import users from '../models/userss';

class userController {
    //get all the users
    static getUsers(req, res) {
    	try{
    		return res.status(200).json({
              message: 'All users successfully gotten',
              users,
              status: 200
    		});
    	}catch(e){
    		return res.status(500).json({
    			message: 'An error occured',
    			error: 'unknown error'
    		});
    	}
        
    }

    static createUsers(req, res) {
    	//authentication should come in here
    const {
      email, firstName, lastName, password, address,
    } = req.body;
    try {
    const newUser = {
    id: users.length + 1,
    email,
    firstName,
    lastName,
    password,
    address,
    status: 'unverified',
    isAdmin: false,
    registered: new Date(),
  };

  if(true) {
  	for (const user of users) {
  		console.log(user.email);
  		if (user.email === email) {
  		res.status(422).send({ error: 'email has been used' });
  	   return;
  }
}
}
   users.push(newUser);
  return res.status(201).json({
   message: 'successfully created a user',
   status: 201,
   users,
   });
  }catch(e){
     return res.status(422).send({
        status: 422,
        message: 'an error ocurred',
        error: 'unknown error',
    })
 }

 
  }
  		

    static loginUser(req, res) {

     const { email, password } = req.body;
    // checks if user exists
    const userExists = users.find(user => user.email === email);
    
    if (!userExists) {
      return res.status(400).json({
        status: 400,
        error: 'Invalid email',
      });
    }
    const {
      id, firstName, lastName, isAdmin,
    } = userExists;
     
      return res.status(200).json({
      status: 200,
      data: {
        token,
        id,
        firstName,
        lastName,
        isAdmin,
        email: userExists.email,
      },
    });

    }


}
// module.exports = userController;
export default userController;
