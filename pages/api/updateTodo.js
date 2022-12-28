import db from "../../utils/dbConfig";

export default function handler(req, res) {
  if (req.method === "PUT" || req.method === "UPDATE") {
    const id = req.body.id;
    const data = req.body.newData;
    db.query(
      `UPDATE todos SET todo = (?) WHERE id = (?)`,
      [data, id],
      (err, data) => {
        if (err) {
          res.json({ error: err });
        } else {
          res.json({
            message: "Data Updated Successfully",
          });
        }
      }
    );
  }
}
