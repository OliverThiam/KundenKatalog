import {useState, useEffect} from 'react'
import "./navbar1.css"

const Navbar1 = () => {
    const [scroll, setScroll] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [hidden, setHidden] = useState(true);
  
    const handleToggle = () => {
        setTimeout(() => {
          setHidden((prev) => !prev);
        }, 500);
        setToggle((prev) => !prev);
      };

      useEffect(() => {
        window.onscroll = () => {
          setScroll(window.scrollY);
        };
      }, []);    

      const vhToPixels = (vh) => {
        return Math.round(window.innerHeight * vh / 100);
      }

  return (
    <nav
    style={{zIndex: 70}}
      className={` w-full flex justify-between bg-gray-800 text-textwhite items-center p-4 py-6 font-poppins ${scroll > vhToPixels(100) ? "menu-fadeIn fixed" : ""}`}
    >
      <div className="flex flex-col">
        <span className="cursor-pointer hover:text-primary duration-300 text-xl">
          Logo
        </span>
        
      </div>
      <div className="md:flex hidden ">
        <ul className="flex items-center text-lg">
          <li className="cursor-pointer hover:text-primary duration-300 pr-4">
            <a href="#home">Home</a>
          </li>
          <li className="cursor-pointer hover:text-primary duration-300 px-4">
            <a href="#über-uns">Über uns</a>
          </li>

          <li className="cursor-pointer hover:text-primary duration-300 px-4">
            <a href="#leistungen">Leistungen</a>
          </li>
          <li className="cursor-pointer hover:text-primary duration-300 px-4">
            <a href="#team">Team</a>
          </li>
          <li className="cursor-pointer uppercase hover:text-primary duration-300 px-4">
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </div>

      <div
        style={{ zIndex: 70 }}
        onClick={handleToggle}
        className={`md:hidden  py-0 px-2.5 rounded-lg sm:right-10 right-2 cursor-pointer absolute`}
      >
        <div class={`nav-icon2 ${toggle ? "nav-icon2 open" : "nav-icon2"}`}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        style={{ zIndex: 30 }}
        className={`md:hidden ${
          toggle ? "menu-fadeIn" : `menu-fadeOut  ${hidden ? "hidden" : ""} `
        }  w-[100vw] h-[100vh]  top-0 right-0 text-white  bg-secondary fixed `}
      >
        <ul className="flex flex-col pt-20 p-4  items-center text-lg">
          <li className="cursor-pointer hover:text-primary duration-300 py-2">
            <a onClick={handleToggle} href="#home">
              Home
            </a>
          </li>
          <li className="cursor-pointer hover:text-primary duration-300 py-2">
            <a onClick={handleToggle} href="#über-uns">
              Über uns
            </a>
          </li>

          <li className="cursor-pointer hover:text-primary duration-300 py-2">
            <a onClick={handleToggle} href="#leistungen">
              Leistungen
            </a>
          </li>
          <li className="cursor-pointer hover:text-primary  duration-300 py-2">
            <a onClick={handleToggle} href="#team">
              Team
            </a>
          </li>
          <li className="cursor-pointer hover:text-primary duration-300 py-2">
            <a onClick={handleToggle} href="#faq">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar1