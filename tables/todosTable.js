import db from "../utils/dbConfig";

export default function createTable() {
  db.query(
    `CREATE TABLE IF NOT EXISTS todos(
          id INT NOT NULL AUTO_INCREMENT,
          todo VARCHAR(255) NOT NULL,
          PRIMARY KEY(id)
      );`,
    (err, result) => {
      if (err) {
        console.error(err);
      }
    }
  );
}
