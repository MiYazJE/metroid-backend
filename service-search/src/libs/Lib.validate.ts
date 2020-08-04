import Joi from '@hapi/joi';
import { IFilm } from '../model/Films.model';

export const searchFilmValidation = (data: IFilm) => {
    const userSchema = Joi.object({
        title: Joi.string().required(),
    });

    return userSchema.validate(data);
};
