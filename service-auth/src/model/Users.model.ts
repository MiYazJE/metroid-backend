import {Schema, model, Document} from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document{
  email: string,
  password: string,
  username: string,
  encryptPassword(password: string): Promise<string>,
  validatePassword(password: string, encrypt_password: string): Promise<boolean>
}

const UserSchema: Schema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    maxlength: 150,
    required: true
  },
  username: {
    type: String,
    required: true
  }
});

UserSchema.methods.encryptPassword = async (password: string): Promise<string> => {
  const SALT = await bcrypt.genSalt(10);
  return bcrypt.hash(password, SALT);
}

UserSchema.methods.validatePassword = async function(password: string, encrypt_password: string): Promise<boolean> {
  return await bcrypt.compare(password, encrypt_password);
}

export default model<IUser>("User", UserSchema);
