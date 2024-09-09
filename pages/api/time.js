export default function handler(req, res) {
  if (req.method === "GET") {
    let date = new Date();
    res.status(200).send(date.toISOString());
  }
}
