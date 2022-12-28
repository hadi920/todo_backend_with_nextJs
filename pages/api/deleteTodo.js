import db from "../../utils/dbConfig";

export default function handler(req, res) {
  if (req.method === "DELETE") {
    const id = req.body.id;
    db.query(`DELETE FROM todos WHERE id = ${id}`, (err, data) => {
      if (err) {
        res.json({ error: err });
      } else {
        res.status(200).send({
          message: `Data Deleted Successfully Against id:${id}`,
        });
      }
    });
  }
}
