import Link from "next/link";
import Image from "next/image";
import Profilepic from "@/public/Iurii_Kyrychenko.jpg";

export default function Header() {
  return (
    <>
      <div className="header">
        <div>
          <Link href={"/"} className="logo-text">
            <Image
              className="profilepic"
              src={Profilepic}
              width={50}
              alt="profile picture"
              priority={true}
            />
            <div className="text-hide">Iurii Kyrychenko - Fullstack Developer</div>
          </Link>
        </div>
        <nav className="nav">
          <Link className="navlink" href={"/portfolio"}>
            PORTFOLIO
          </Link>
          <Link className="navlink" href={"/contacts"}>
            CONTACTS
          </Link>
        </nav>
      </div>
    </>
  );
}
