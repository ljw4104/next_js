import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";

export default function () {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") //get 매서드
      .then((res) => setUsers(res.data)); //호출되면 유저스에 데이터 저장
  }, []);

  console.log(users[0]);
  return (
    <Layout>
      <div>
        <div>사용자 목록 페이지</div>
        {users.map((user) => {
          return (
            <div key={user.id} className="border-2 p-4">
              <div className="text-3xl font-bold">{user.username}</div>
              <div>{user.name}</div>
              <div>{user.email}</div>
              <a href={`https://${user.website}`}>{user.website}</a>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
