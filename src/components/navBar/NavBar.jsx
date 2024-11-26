import { FaMagnifyingGlass } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import './navBar.css'
const NavBar = () => {
  return (
      <>
      
          <div className="flex items-center justify-evenly py-[40px] px-[10px]">
              
              <span>
                  <h3 className="font-bold text-3xl text-amber-500">Kacchi Bhai</h3>
              </span>

              <nav>
                  <ul className="flex ">
                      <li className="mx-4" ><a className="link" href="/">Home</a></li>
                      <li className="mx-4" ><a className="link" href="/">Recipes</a></li>
                      <li className="mx-4" ><a className="link" href="/">About</a></li>
                      <li className="mx-4" ><a className="link" href="/">Search</a></li>
                  </ul>
              </nav>

              <span className="flex gap-3">
                  
                  <div className="flex items-center gap-2 bg-gray-400 p-2 rounded-full ">
                      <div><FaMagnifyingGlass /></div>
                      <input className="input bg-gray-400 " type="text" placeholder="Search" />
                  </div>

                  <div className="text-3xl p-2 bg-amber-500 rounded-full">
                  <CgProfile />
                  </div>


              </span>


          </div>
      
      
      
      
      </>
  )
}

export default NavBar