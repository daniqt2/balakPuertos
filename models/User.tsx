import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, "Email ya existe"],
    require: [true, "Email requerido"],
  },
  id: { type: String },
  name: { type: String },
  fullName: { type: String },
});

// export interface IUser {
//   email: "danshca@gmail.com";
//   at_hash: "DQZtu_Se4JKUtqYMEMOiFg";
//   name: "Daniela Q";
//   picture: "https://lh3.googleusercontent.com/a/AAcHTtd8d5ogm49IRjtI25VV6Bl2c3G-UrRUEP2xynXo6al_=s96-c";
//   given_name: "Daniela";
//   family_name: "Q";
//   locale: "en";
//   iat: 1690209629;
//   exp: 1690213229;
// }

const User = models.User || model("User", UserSchema);

export default User;
