import {
  exercisesPostController,
  logsByUserGetController,
  userPostController,
  usersGetController,
} from "./controllers.js";

export function registerUsersRoutes(router) {
  router.post("/users", userPostController);
  router.get("/users", usersGetController);

  router.post("/users/:id/exercises", exercisesPostController);

  router.get("/users/:_id/logs", logsByUserGetController);
}
