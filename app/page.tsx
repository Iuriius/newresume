import Link from "next/link";
import Image from "next/image"
import Mehero from "@/public/me-hero.jpg"
import Meherodesk from "@/public/Metech.jpg"
import GoIT from "@/public/goit.png"
import English from "@/public/logo-bridge.svg"
import Adobe from "@/public/Adobe.svg"
import Technologies from "@/components/Technologies"
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

/*
/**|======================================
/**| Code
/**|======================================
*/
export default function Home() {
  return (
    <main>
      <section className="mainsection1">
        <Image className="bg-hero"
          src={Mehero}
          alt="background hero picture"
          priority={true} />
        <Image className="bg-hero-desktop"
          src={Meherodesk}
          alt="background hero picture"
          priority={true} />

        <div className="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
              Welcome
            </text>
          </svg>
          <p className="hero-text">I am a fullstack developer
            <br />based in Bila Tserkva, Ukraine</p>
        </div>

        <Link className="button" href={"/portfolio"}>MY PROJECTS</Link>
      </section>

      <section className="mainsection2">
        <h2 className="topskills-h2">TOP SKILLS</h2>
        <div className="topskills-wrapper">
          <a className="topskills-link" href="https://drive.google.com/file/d/1LpYZN7ylMnzig17SMUSMQ1kTAZgl4xWG/view" target="_blank"
            rel="noopener noreferrer">
            <Image className="topskills-img-coding"
              src={GoIT}
              alt="Coding certificate" />
            <h3 className="topskills-h3">Coding certificate</h3> click to verify the certificate</a>

          <a className="topskills-link" href="https://bridge.edu/tefl/tools/TEFL_certificates/get_account.php?account_id=00121750"
            target="_blank" rel="noopener noreferrer">
            <Image className="topskills-img-english"
              src={English}
              alt="English certificate" />
            <h3 className="topskills-h3">TEFL credentials</h3> click to verify the certificate</a>

          <a className="topskills-link" href="https://www.videomontazh.online"
            target="_blank" rel="noopener noreferrer">
            <Image className="topskills-img-adobe"
              src={Adobe}
              alt="Adobe skills" />
            <h3 className="topskills-h3">Ps, Pr, Ae, Ai</h3>7+ years of experience</a>
        </div>
      </section>

      <section className="mainsection3">
        <h2 className="my-stack-h2">MY STACK</h2>
        <Technologies />
      </section>

      <section className="mainsection2">
        <h2 className="connect-h2">CONNECT</h2>
        <div className="connect">
          <a className="connect-link" href="https://github.com/Iuriius" target="_blank" rel="noopener noreferrer">
            <IoLogoGithub />
          </a>
          <a className="connect-link" href="https://www.linkedin.com/in/iurii-kyrychenko-393706249/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn />
          </a>
          <a className="connect-link" href="mailto:iuriius@gmail.com" target="_blank" rel="noopener noreferrer">
            <GoMail />
          </a>
        </div>
      </section>

    </main>
  )
}
