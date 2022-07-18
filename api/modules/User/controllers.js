import { createExerciseByUser } from "../Exercise/services.js";
import { findLogsByUser } from "../Log/services.js";
import { createUser, getUser, getUsers } from "./services.js";

export async function userPostController(req, res) {
  const { username } = req.body;

  try {
    const user = await createUser(username);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function usersGetController(req, res) {
  try {
    const users = await getUsers();
    res.status(201).json(users);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function exercisesPostController(req, res) {
  const userId = req.params.id;
  const { description, duration, date } = req.body;

  try {
    const user = await getUser(userId);

    const exercise = await createExerciseByUser(
      userId,
      description,
      new Number(duration),
      date
    );

    res.status(201).json({
      username: user.username,
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date.toDateString(),
      _id: user._id,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

export async function logsByUserGetController(req, res) {
  const userId = req.params._id;
  const { from, to, limit } = req.query;

  try {
    const logs = await findLogsByUser(userId, { from, to, limit });
    res.status(201).json(logs);
  } catch (error) {
    res.status(400).send(error.message);
  }
}
