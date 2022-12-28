import db from "../../utils/dbConfig";

export default function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body.todo;
    db.query(`INSERT INTO todos (todo) VALUES (?);`, data, (err, data) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json({
          message: "Data Inserted Successfully",
        });
      }
    });
  }
}
