import Joi from 'joi';
import { speeches } from '../configs/speeches.config';

const login = Joi.object().keys({
    email: Joi.string().email().required().messages(
        {
            'string.empty': speeches.USER_EMAIL_REQUIRED,
            'string.email': speeches.USER_EMAIL_INVALID,
        }
    ),
    password: Joi.string().required().messages(
        {
            'string.empty': speeches.USER_PWD_REQUIRED,
        }
    )
});

const register = Joi.object().keys({
    email: Joi.string().email().required().messages({
        'string.empty': speeches.USER_EMAIL_REQUIRED
      }),
    password: Joi.string().required(),
    full_name: Joi.string().required(),
    mobile: Joi.string().required(),
    role:Joi.string().required(),
    qualification: Joi.string().required(),
});

export default { login, register };