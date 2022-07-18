import { Exercise } from "./ExerciseModel.js";

export async function createExerciseByUser(
  userId,
  description,
  duration,
  date
) {
  const dateFormat = date ? new Date(date) : new Date();

  const exercise = new Exercise({
    user: userId,
    description,
    duration,
    date: dateFormat,
  });

  await exercise.save();

  return exercise;
}

export async function searchExercisesByUser(userId, filters) {
  const filtersMongoose = filtersToMongooseFilters(filters);

  const exercises = await Exercise.find({
    user: userId,
    ...filtersMongoose,
  }).limit(filters.limit);

  return exercises;
}
/// 62d2335dacce55f44c61dab7

function filtersToMongooseFilters({ from, to }) {
  let filters = {};

  if (from) {
    filters = { ...filters, date: { ...filters.date, $gte: new Date(from) } };
  }

  if (to) {
    filters = { ...filters, date: { ...filters.date, $lte: new Date(to) } };
  }

  return filters;
}
