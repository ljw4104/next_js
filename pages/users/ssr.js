import axios from "axios";
import Layout from "../../components/Layout";

export default function (porps) {
  console.log(porps.users);

  return (
    <Layout>
      <div>
        <div>사용자 목록 페이지</div>
        {porps.users.map((user) => {
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
export async function getStaticProps() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  console.log(res.data);
  return {
    props: {
      users: res.data,
      sunMoon: "선문대",
    },
  };
}
