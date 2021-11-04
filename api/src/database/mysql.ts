import mysql from "mysql";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cut_hair",
});

export const connect = () => {
  connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!");
  });
};
