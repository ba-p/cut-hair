import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

export const serverInit = (app: express.Application) => {
  app.use(
    cors({
      origin: "*",
    })
  );

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
    console.log("a");
  });
  app.listen(8080, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:8080`);
  });
};
