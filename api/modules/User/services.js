import { User } from "./UserModel.js";

export async function createUser(username) {
  const user = new User({ username });
  await user.save();
  return user;
}

export async function getUsers() {
  const users = User.find();
  return users;
}

export async function getUser(userId) {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not exist");
  }

  return user;
}
