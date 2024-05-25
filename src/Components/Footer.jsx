import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faWhatsapp, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function Footer (){
    return (
    <>
        <footer>
            <div class="footer__socials">
                <a href="http://www.linkedin.com/in/precious-adeogun" target="_blank" rel="noopener noreferrer" className="text-white"><FontAwesomeIcon icon={faLinkedin} size={3} /></a>
                <a href="https://www.instagram.com/oluwamajorr" target="_blank" rel="noopener noreferrer" className="text-white"><FontAwesomeIcon icon={faInstagram} size={3}/></a>
                <a href="https://github.com/Precious-09" target="_blank" rel="noopener noreferrer" className="text-white"><FontAwesomeIcon icon={faGithub} size={3}/></a>
                <a href="https://api.whatsapp.com/send?phone=+2347087322969" target="_blank" rel="noopener noreferrer" className="text-white"><FontAwesomeIcon icon={faWhatsapp} size={3}/></a>
                <a href="https://twitter.com/saintfgs" target="_blank" rel="noopener noreferrer" className="text-white"><FontAwesomeIcon icon={faTwitter} size={3}/></a>
            </div>
            
            <div class="footer__copyright"><small>© Adeogun Precious. All rights reserved</small></div>
        </footer>
    </>
    )
}