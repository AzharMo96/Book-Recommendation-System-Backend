import { Application } from "express";
import morgan from "morgan";

export default (app: Application) => {
  morgan.token('date', () => {
    return new Date().toISOString();
  });

  app.use(
    morgan(
      ":date :method :url :status :response-time ms - :res[content-length]"
    )
  );
};
