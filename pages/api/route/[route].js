export default function user(req, res) {
  //   const {
  //     query: { api_key, asd, route },
  //   } = req;

  const { api_key, asd, route } = req.query;
  res.json({ ok: true, massge: "GET" });
  console.log(api_key);
  console.log(asd);
  console.log(route);
}
