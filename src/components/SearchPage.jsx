import { BsBookmarkHeartFill } from "react-icons/bs"
import { FaPlayCircle } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useSearch } from "../context/Search"
import Layout from "./Layout/Layout"
import Loader from "./Loader"

const SearchPage = () => {

    let [search, setSearch] = useSearch()

    // console.log(search.result)
  return (
    
    <Layout>



      <div className="container my-5">
        <div className="row">
        {
                search.result.length > 0 ? (
                
                    search.result.map((m) => (
                        <NavLink  to={`/movie/detail/${m._id}`} className="card col-4 col-lg-3 ">
                            <div className="img">
                            <img
                                src={m.img}
                                alt={m.title}/>
                            </div>
                            <p style={{color:"black"}} className="title">{m.title}</p>
                            {/* <p style={{color:"black"}} className="category">{m.category.name}</p> */}
                            {/* <p style={{color:"black"}} className="year">{m.year}</p> */}
                        </NavLink>
                    ))

                ) : (<Loader/>)
              }
        </div>
        
             
            </div>
          
    </Layout>
  )
}
export default SearchPage