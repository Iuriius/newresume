import Image from "next/image"
/*
/**|======================================
/**| images
/**|======================================
*/
import Aounicase1 from "@/public/portfolio-aounicase.jpg"
import Aounicase2 from "@/public/aounicase.jpg"
import Gavellogo from "@/public/gavellogo.png"
import Videoeditor1 from "@/public/portfolio-videoeditor.jpg"
import Videoeditor2 from "@/public/videoeditor.jpg"
import Videologo from "@/public/videologo.png"
import Yourpet1 from "@/public/portfolio-yourpet.jpg"
import Yourpet2 from "@/public/yourpet.jpg"
import Yourpetlogo from "@/public/petlogo.png"
import Filmoteka1 from "@/public/portfolio-filmoteka.jpg"
import Filmoteka2 from "@/public/filmoteka.jpg"
import Filmotekalogo from "@/public/filmoteka.png"
import Foodsta1 from "@/public/portfolio-foodsta.jpg"
import Foodsta2 from "@/public/foodsta.jpg"
import Foodstalogo from "@/public/foodsta.svg"
import Alex1 from "@/public/portfolio-strashnyi.jpg"
import Alex2 from "@/public/strashnyi.jpg"
import Alexlogo from "@/public/AS watermark black.png"
import Webstudio1 from "@/public/portfolio-webstudio.jpg"
import Webstudio2 from "@/public/webstudio.jpg"
import Webstudiologo from "@/public/weblogo.png"


export default function Portfolio() {
    return (
        <>
            <h2 className="portfolio-h2">PORTFOLIO</h2>
            <section className="portfolio-section">

                <div className="portfolio-card">
                    <a className="portfolio-title-link" href="https://www.aounicase.com.ua/" target="_blank" rel="noopener noreferrer">
                        <Image className="portfolio-pic1" src={Aounicase1} alt="aounicase pic site" />
                        <Image className="portfolio-pic2" src={Aounicase2} alt="aounicase pic site" />
                        <div className="portfolio-title">
                            <Image className="portfolio-logo" src={Gavellogo} alt="logo" height={20} />
                            <h3 className="portfolio-h3">AO Unicase</h3>
                        </div>
                        <h4 className="portfolio-h4">Get legal help</h4>
                    </a>
                    <p className="portfolio-p">Unicase is a fast, adaptive web application built with Next.js, designed to provide comprehensive information about lawyers based in Kyiv, Ukraine. The site features a sleek and professional frontend, integrates Google Analytics for insights, and offers a seamless user experience as a Single Page Application (SPA) with Server-Side Rendering (SSR). Users can easily navigate the site to find legal help from professionals, explore an integrated map, and access all the necessary links and resources.</p>
                </div>

                <div className="portfolio-card">
                    <a className="portfolio-title-link" href="https://videoeditor-one.vercel.app/" target="_blank" rel="noopener noreferrer">
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

                <div className="portfolio-card">
                    <a className="portfolio-title-link" href="https://iuriius.github.io/filmoteka/" target="_blank" rel="noopener noreferrer">
                        <Image className="portfolio-pic1" src={Filmoteka1} alt="Filmoteka pic site" />
                        <Image className="portfolio-pic2" src={Filmoteka2} alt="Filmoteka pic site" />
                        <div className="portfolio-title">
                            <Image className="portfolio-logo" src={Filmotekalogo} alt="logo" height={20} />
                            <h3 className="portfolio-h3">Filmoteka</h3>
                        </div>
                        <h4 className="portfolio-h4">Find Movies You Like</h4>
                    </a>
                    <p className="portfolio-p">An online movie theater project where you can find movies, add and remove them from your collection, switch to the dark mode and use pagination. My personal contribution to this project was a custom scroll-up button as well as a custom spinner I specially made for it in Adobe After Effects. As a scrum master of the project I wrote a big deal of JavaScript logic connected with functionality of the page and fixed some final bugs. Pictures of all contributors also were edited by me.</p>
                </div>

                <div className="portfolio-card">
                    <a className="portfolio-title-link" href="https://iuriius.github.io/foodsta/" target="_blank" rel="noopener noreferrer">
                        <Image className="portfolio-pic1" src={Foodsta1} alt="Foodsta pic site" />
                        <Image className="portfolio-pic2" src={Foodsta2} alt="Foodsta pic site" />
                        <div className="portfolio-title">
                            <Image className="portfolio-logo" src={Foodstalogo} alt="logo" height={20} />
                            <h3 className="portfolio-h3">FoodSta</h3>
                        </div>
                        <h4 className="portfolio-h4">Enjoy Your Food From Anywhere</h4>
                    </a>
                    <p className="portfolio-p">This online food delivery service was created in a collaboration with GoIT school students. The idea of the service is that right here on this page you can order food without even leaving your place. My personal contributions to this project were the "Favorites" section and a modal window. This was a very first project I worked on with a team of many developers. I learned a lot about team projects and the routine IT workflow.</p>
                </div>

                <div className="portfolio-card">
                    <a className="portfolio-title-link" href="https://iuriius.github.io/strashnyi/" target="_blank" rel="noopener noreferrer">
                        <Image className="portfolio-pic1" src={Alex1} alt="Alex pic site" />
                        <Image className="portfolio-pic2" src={Alex2} alt="Alex pic site" />
                        <div className="portfolio-title">
                            <Image className="portfolio-logo" src={Alexlogo} alt="logo" height={20} />
                            <h3 className="portfolio-h3">Alex Strashnyi</h3>
                        </div>
                        <h4 className="portfolio-h4">The First Feeder Fishing Champion Of The World</h4>
                    </a>
                    <p className="portfolio-p">A personal page of Alex Strashnyi. The whole concept and design is created by Iurii Kyrychenko. The page is going to be updated with payment services, articles and rare pictures from world class fishing competitions and seminars. At this point the project is on hold temporarily. This project is my first commercial experience as a web developer. It is based on the Parcel build tool with various libraries and provides great development experience.</p>
                </div>

                <div className="portfolio-card">
                    <a className="portfolio-title-link" href="https://iuriius.github.io/goit-markup-hw-08/index.html" target="_blank" rel="noopener noreferrer">
                        <Image className="portfolio-pic1" src={Webstudio1} alt="Webstudio pic site" />
                        <Image className="portfolio-pic2" src={Webstudio2} alt="Webstudio pic site" />
                        <div className="portfolio-title">
                            <Image className="portfolio-logo" src={Webstudiologo} alt="logo" height={20} />
                            <h3 className="portfolio-h3">Web Studio</h3>
                        </div>
                        <h4 className="portfolio-h4">Effective solutions for your business</h4>
                    </a>
                    <p className="portfolio-p">This is my very first entry project at the coding school that taught me how developing web pages can be fun and interesting. I learned a lot about HTML and CSS technologies working on this project. I was very happy writing it. That was a first step that led me into IT.</p>
                </div>

            </section>
        </>
    )
}
