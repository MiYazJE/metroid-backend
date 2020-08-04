import { Schema, model, Document } from 'mongoose';

export interface IFilm extends Document {
    title: string;
}

const FilmSchema: Schema = new Schema({
    email: {
        type: String,
        required: true,
    },
});

export default model < IFilm > ('Film', FilmSchema);
