const Joi = require("joi");

const validator = (schema) => (payload) => {
    return schema.validate(payload, { abortEarly: false });
}

const dataSchema = Joi.object({
    JokeId: Joi.number(),
    Joke: Joi.string().required(),
    Rating: Joi.number().required(),
    Category: Joi.string().required(),
    DateAdded: Joi.string().required()
});

const validateData = validator(dataSchema);

module.exports = { validateData };
