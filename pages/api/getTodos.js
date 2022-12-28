import db from "../../utils/dbConfig";
import createTodosTable from "../../tables/todosTable";

export default function handler(req, res) {
  createTodosTable();
  if (req.method === "GET") {
    db.query("SELECT * FROM todos", (err, data) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.json(data);
      }
    });
  } else {
    res.status();
  }
}
