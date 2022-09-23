const a_id = "id";
const a_pw = 1234;

export default function login(req, res) {
  console.log("방금 내가 찍은것 ~~~~~~~~~~~~~~~~~~~~~~~~~");
  const id = req.body.id;
  const pw = req.body.pw;

  if ("POST" !== req.method) {
    return res
      .status(405)
      .json({ ok: false, massge: "지원하지 않는 매소드 입니다." });
  }

  if (!id) return res.json({ ok: false, massge: "아이디 입력" });
  if (!pw) return res.json({ ok: false, massge: "비밀번호 입력" });

  console.log(id, pw);
  if (id === a_id && pw === a_pw) {
    res.json({ ok: true, massge: "로그인 완료" });
  } else {
    res.json({ ok: false, massge: "로그인 실패" });
  }
}
