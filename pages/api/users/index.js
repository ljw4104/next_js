export default function user(req, res) {
  console.log(req.query.api_key);
  res.json({ ok: true, massge: "GET" });
}
