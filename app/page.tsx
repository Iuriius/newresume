import Image from 'next/image'
import Mehero from "@/public/me-hero.jpg"
import GoIT from "@/public/goit.png"
import English from "@/public/logo-bridge.svg"
import Adobe from "@/public/Adobe.svg"

export default function Home() {
  return (
    <main>
      <section className='mainsection1'>
        <Image className='bg-hero'
          src={Mehero}
          alt="background hero picture" />

        <div className="wrapper">
          <svg>
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
              Welcome
            </text>
          </svg>
          <p className='hero-text'>I am a fullstack developer
            <br />based in Bila Tserkva, Ukraine</p>
        </div>

        <button className='button'>MY PROJECTS</button>
      </section>
      <section className='mainsection2'>
        <h2 className='topskills-h2'>TOP SKILLS</h2>

        <a className='topskills-link' href="https://drive.google.com/file/d/1LpYZN7ylMnzig17SMUSMQ1kTAZgl4xWG/view" target="_blank"
          rel="noopener noreferrer">
          <Image className='topskills-img-coding'
            src={GoIT}
            alt="Coding certificate" />
          <h3 className='topskills-h3'>Coding certificate</h3> click to verify the certificate</a>

        <a className='topskills-link' href="https://bridge.edu/tefl/tools/TEFL_certificates/get_account.php?account_id=00121750"
          target="_blank" rel="noopener noreferrer">
          <Image className='topskills-img-english'
            src={English}
            alt="English certificate" />
          <h3 className='topskills-h3'>TEFL credentials</h3> click to verify the certificate</a>

        <a className='topskills-link' href="https://www.videomontazh.online"
          target="_blank" rel="noopener noreferrer">
          <Image className='topskills-img-adobe'
            src={Adobe}
            alt="Adobe skills" />
          <h3 className='topskills-h3'>Ps, Pr, Ae, Ai</h3>7+ years of experience</a>


      </section>
    </main>
  )
}
