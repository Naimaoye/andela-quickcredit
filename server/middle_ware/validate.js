import Joi from 'joi';

class Validator {

  static usersValidator(users) {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email()
        .required(),
      firstName: Joi.string()
        .regex(/^[A-Z]|[a-z]+$/)
        .min(3)
        .required(),
      lastName: Joi.string()
        .regex(/^[A-Z]|[a-z]+$/)
        .min(3)
        .required(),
      password: Joi.string()
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .min(7)
        .alphanum()
        .required(),
      address: Joi.string().required(),
      status: Joi.string()
        .insensitive()
        .default('unverified'),
      isAdmin: Joi.boolean().default(false),

    });
    return Joi.validate(users, schema);
  }

 static loginValidator(loginData) {
      const schema = Joi.object().keys({
      email: Joi.string().email().trim().lowercase()
        .required(),
      password: Joi.string().min(7).required().strict(),
    });
    return Joi.validate(loginData, schema);
  }

static loanValidator(loan) {
    const schema = Joi.object().keys({
      email: Joi.string()
        .email()
        .required(),
      firstName: Joi.string()
        .regex(/^[A-Z]|[a-z]+$/)
        .min(3)
        .required(),
      lastName: Joi.string()
        .regex(/^[A-Z]|[a-z]+$/)
        .min(3)
        .required(),
      tenor: Joi.number()
        .integer()
        .min(1)
        .max(12)
        .required(),
      amount: Joi.number().min(10000).required(),
    });
    return Joi.validate(loan, schema);
  }
  
  static loanApprovalValidator(loan) {
    const schema = Joi.object().keys({
      status: Joi.string()
        .insensitive()
        .valid('approved', 'rejected')
        .required(),
    });
    return Joi.validate(loan, schema);
  }

  static loanRepaymentValidator(repayment) {
    const schema = Joi.object().keys({
      paidAmount: Joi.number().required(),
    });
    return Joi.validate(repayment, schema);
  }

 static loanQueryValidator(loan) {
    const schema = Joi.object().keys({
      status: Joi.string()
        .insensitive()
        .valid('approved'),
      repaid: Joi.boolean()
        .insensitive()
        .valid(true, false),
    });
    return Joi.validate(loan, schema);
  }

}
export default Validator;