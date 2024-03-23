import twitter from "../../public/Twitter Icon.png";
import facebook from "../../public/Facebook Icon.png";
import github from "../../public/GitHub Icon.png";
import instagram from "../../public/Instagram Icon.png";
import "./Footer.css"

import Image from "next/image";




export default function Footer() {
    return(
        <main className="footer" >
            <div className="footerimg" >
            <button>
                <Image src={twitter} alt="twitter"></Image>
            </button>
            <button>
                <Image src={facebook} alt="facebook"></Image>
            </button>
            <button>
                <Image src={instagram} alt="instagram"></Image>
            </button>
            <button>
            <Image src={github} alt="github"></Image>
            </button>
            </div>
        </main>
    )
}