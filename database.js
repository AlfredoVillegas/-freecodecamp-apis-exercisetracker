import dotenv from "dotenv";
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost//name_app";
//console.log(MONGODB_URI, "uriiiiiiiii");
export const mongoConfig = {
  uri: MONGODB_URI,
  options: {},
};
