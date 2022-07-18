import { searchExercisesByUser } from "../Exercise/services.js";
import { User } from "../User/UserModel.js";

export async function findLogsByUser(userId, filters) {
  const user = await User.findById(userId);
  const exercises = await searchExercisesByUser(userId, filters);

  const logsResponse = {
    username: user.username,
    count: exercises.length,
    _id: user._id,
    log: mapExercisesToResponse(exercises),
  };

  return logsResponse;
}

function mapExercisesToResponse(exercises) {
  const exercisesResponse = exercises.map((exercise) => {
    return {
      description: exercise.description,
      duration: exercise.duration,
      date: exercise.date.toDateString(),
    };
  });
  return exercisesResponse;
}
