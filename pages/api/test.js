export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ name: "안녕" });
  }
  if (req.method === "POST") {
    res.status(200).json({ name: "바보" });
  }
}
