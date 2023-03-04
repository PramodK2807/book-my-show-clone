import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import {AiFillHeart} from 'react-icons/ai'
import useCategory from "../../hooks/useCategory";
import { useSearch } from "../../context/Search";
import { useWishlist } from "../../context/WishList";
import { useMovies } from "../../context/MovieContext";
import { useEffect } from "react";
import { FiLogOut } from "react-icons/fi";


const Header = () => {

    const [auth, setAuth] = useAuth()
    const [search, setSearch] = useSearch()
    const [wishlist] = useWishlist()
    const [movies, setMovies] = useMovies()

    const categories = useCategory()
    const navigate = useNavigate()
    // console.log(categories)

    useEffect(() => {
    },[auth])
    

    const searchHandle = async(e) => {
      e.preventDefault()
      try {
        const result = await fetch(`${process.env.REACT_APP_API}/search/${search.keyword}`)
        let data = await result.json()
        // console.log(data)

        setSearch({...search, result:data})
        navigate('/search')
      } 
      catch (error) {
        // console.log(error)
      }

    }
    
   
    
    const logout = () => {
      localStorage.removeItem('auth')
      setAuth({
        ...auth
      })
    }
        

    

    // console.log(search)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to='/'>
          <img
                src="https://in.bmscdn.com/webin/common/icons/logo.svg"
                alt="logo"
              />
          </NavLink>
          <button
          style={{boxShadow:"none", color:'#f84464'}}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <form className="d-flex" onSubmit={searchHandle}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search.keyword}
                onChange={(e) => setSearch({...search, keyword: e.target.value})}
              />
              <button className="btn" style={{background:'#f84464', color:"white"}} type="submit" >
                Search
              </button>
            </form>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to='/'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
             
              <NavLink className="nav-link" to='/wishlist'>
                  WishList <span style={{background:'red', padding:"0 7px", border:"solid 1px white", borderRadius:"50%"}}>{wishlist.length}</span>
                </NavLink>
             
                
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to='/'>
                  Events
                </NavLink>
              </li> */}
              

              


              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Genere
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {
                    categories.map((cat) => (
                      <li key={cat._id}>
                      <NavLink className="dropdown-item text-dark" to={`/categories/${cat._id}`}>
                        {cat.name}
                      </NavLink>
                    </li>
                    ))
                  }
                 
                </ul>
              </li>


              
                  {
                    auth.user ? (
                    <>
                    <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {auth?.user?.name}
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                   <li >
                      <NavLink className="dropdown-item text-dark"   to={`/dashboard/${auth?.user?.isAdmin === true ? `admin/${auth.user._id}` : 'user'}`}>
                        Dashboard
                      </NavLink>
                    </li>

                    <li>
                <NavLink to='/' onClick={(e) => logout(e)} className=" dropdown-item  text-dark">Logout <FiLogOut/>
                </NavLink>
                </li>

                </ul>
                </li>
                    
                    </>
                    
                    ) : (
                      <li className="nav-item">
                    <NavLink className="btn" style={{background:'#f84464', color:"white"}} to='/login'>
                      Login
                    </NavLink>
                  </li>
                    )

                  }
                  {/* </ul> */}
              {/* </li> */}




                        {/* <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              {
                        
                        auth.user ? (<>
                  <li>
                  <NavLink className="btn dropdown-item text-dark" style={{background:'#f84464', color:"white"}} to={`/dashboard/${auth?.user?.isAdmin === true ? `admin/${auth.user._id}` : 'user'}`}>
                      Dashboard
                  </NavLink>
                </li>

                <li>
                <NavLink onClick={(e) => logout(e)} className="dropdown-item text-dark">Logout <FiLogOut/></NavLink>
                </li>
                  </>)
                : 

                  (<>
                    <li className="nav-item">
                    <NavLink className="btn" style={{background:'#f84464', color:"white"}} to='/login'>
                      Login
                    </NavLink>
                  </li>
                   </>
  ) 

}
</ul> */}
              
              
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
