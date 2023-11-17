import Link from "next/link";
import Image from 'next/image'
/*
/**|======================================
/**| images
/**|======================================
*/
import Videoeditor1 from "@/public/portfolio-videoeditor.jpg"
import Videoeditor2 from "@/public/videoeditor.jpg"
import Videologo from "@/public/videologo.png"
import Yourpet1 from "@/public/portfolio-yourpet.jpg"
import Yourpet2 from "@/public/yourpet.jpg"
import Yourpetlogo from "@/public/petlogo.png"
export default function Portfolio() {
    return (
        <>
            <h2 className="portfolio-h2">PORTFOLIO</h2>
            <section className="portfolio-section">

                <div className="portfolio-card">
                    <a className="portfolio-title-link" href="https://videomontazh.online/" target="_blank" rel="noopener noreferrer">
                        <Image className="portfolio-pic1" src={Videoeditor1} alt="Videoeditor pic site" />
                        <Image className="portfolio-pic2" src={Videoeditor2} alt="Videoeditor pic site" />
                        <div className="portfolio-title">
                            <Image className="portfolio-logo" src={Videologo} alt="logo" height={20} />
                            <h3 className="portfolio-h3">Videomontazh.online</h3>
                        </div>
                        <h4 className="portfolio-h4">Your videoeditor</h4>
                    </a>
                    <p className="portfolio-p">A React project based on Vite bundle. This is a totally functional working commercial project that earns money. For it's styling I used Emotion library. I integrated Google services like YouYube and Sheets. Modern librares like axios, swiper, icons, image-gallery, hamburger were used to make it work. The whole design of this SPA was created by me from the scratch. I am very proud of this site because it helps people to run their social networks.</p>
                </div>

                <div className="portfolio-card">
                    <a className="portfolio-title-link" href="https://mishastryzhka.github.io/project-Fr7v6c5s/" target="_blank" rel="noopener noreferrer">
                        <Image className="portfolio-pic1" src={Yourpet1} alt="Videoeditor pic site" />
                        <Image className="portfolio-pic2" src={Yourpet2} alt="Videoeditor pic site" />
                        <div className="portfolio-title">
                            <Image className="portfolio-logo" src={Yourpetlogo} alt="logo" height={20} />
                            <h3 className="portfolio-h3">Your Pet</h3>
                        </div>
                        <h4 className="portfolio-h4">Take good care of your pets</h4>
                    </a>
                    <p className="portfolio-p">This is my coding school graduation project. A SPA based on react with MondoDB backend an lots of other services. This was a team project that brought a lot of challenges and insights. It allows you to search and read interesting articles about animals. Authorization gives you an opportunity to look for pets that need adoption or lost their owners. We decided to use Styled components library for styling. Libs like axios, formik, yup, redux and many others were used to bring it to life.</p>
                </div>

            </section>
        </>
    )
}
