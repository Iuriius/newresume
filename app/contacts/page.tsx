import { GoMail } from 'react-icons/go';
import { TfiWorld } from 'react-icons/tfi';
import { ImLinkedin, ImPhone, ImLocation } from 'react-icons/im';

import Image from 'next/image';
import Keyboard from "@/public/keyboard.jpg"


export default function Contacts() {
    return (
        <>
            <div className="contacts">
                <a className='contacts-link' href="mailto:iuriius@gmail.com"><GoMail className="contacts-icon" />Send e-mail</a>
                <a className='contacts-link' href="tel:+380733216072"><ImPhone className="contacts-icon" />Give a call</a>
                <a className='contacts-link' href="https://www.linkedin.com/in/iurii-kyrychenko-393706249/" target="_blank" rel="noopener noreferrer"><ImLinkedin className="contacts-icon" />My Linkedin</a>
                <a className='contacts-link' href="https://goo.gl/maps/nYDgGF27xA3qAjKj8" target="_blank" rel="noopener noreferrer"><ImLocation className="contacts-icon" />Bila Tserkva, UA</a>
                <a className='contacts-link' target="_blank" rel="noopener noreferrer" href="http://iurii.website"><TfiWorld className="contacts-icon" />www.iurii.website</a>
                <Image className='contacts-bg'
                    src={Keyboard}
                    alt="background keyboard picture" />
            </div>
        </>
    )
}
