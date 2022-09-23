export default function user(req, res) {
  console.log(req.query);
  res.json({ ok: true, massge: "GET" });
}
