import Link from "next/link";
import { useRouter } from "next/router";
import { cls } from "../libs/Utils";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex bg-slate-200 justify-around text-xl p-3">
        <li>
          <Link href="/">
            <a
              className={cls(
                router.pathname === "/"
                  ? " text-white rounded-xl p-2 bg-slate-400"
                  : "p-2"
              )}
            >
              인덱스 페이지
            </a>
          </Link>
        </li>
        <li>
          <Link href="/home">
            <a
              className={cls(
                router.pathname === "/home"
                  ? " text-white rounded-xl p-2 bg-slate-400"
                  : "p-2"
              )}
            >
              홈
            </a>
          </Link>
        </li>
        <li>
          <Link href="/counter">
            <a
              className={cls(
                router.pathname === "/counter"
                  ? " text-white rounded-xl p-2 bg-slate-400"
                  : "p-2"
              )}
            >
              카운터
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a
              className={cls(
                router.pathname === "/about"
                  ? " text-white rounded-xl p-2 bg-slate-400"
                  : "p-2"
              )}
            >
              개발자 소개
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users/users">
            <a
              className={cls(
                router.pathname === "/users/users"
                  ? " text-white rounded-xl p-2 bg-slate-400"
                  : "p-2"
              )}
            >
              유저목록
            </a>
          </Link>
        </li>
        <li>
          <Link href="/users/ssr">
            <a
              className={cls(
                router.pathname === "/users/ssr"
                  ? " text-white rounded-xl p-2 bg-slate-400"
                  : "p-2 rounded-xl hover:bg-slate-300"
              )}
            >
              유저목록(ssr)
            </a>
          </Link>
        </li>
        <li>
          <Link href="/todo">
            <a
              className={cls(
                router.pathname === "/todo"
                  ? " text-white rounded-xl p-2 bg-slate-400"
                  : ""
              )}
            >
              Todo List
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
