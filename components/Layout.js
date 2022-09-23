import Navbar from "./NavBar";

export default function Layout(p) {
  console.log(p);
  return (
    <div id="jungwoon">
      <Navbar></Navbar>
      {p.children}
    </div>
  );
}
