import { NavLink } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import UserMenu from "../../components/Layout/UserMenu"
import Loader from "../../components/Loader"
import { useAuth } from "../../context/Auth"
import { useWishlist } from "../../context/WishList"

const Wishlist = () => {
  const [wishlist, setWishlist] = useWishlist()
  let [auth, setAuth] = useAuth()


  const remove = (mid) => {
    try {
      let myWishlist = [...wishlist]
      let index = myWishlist.findIndex(item => item._id === mid)
      myWishlist.splice(index, 1)
      setWishlist(myWishlist)
      localStorage.setItem('wishlist', JSON.stringify(myWishlist));



    } catch (error) {
      // console.log(error)
      
    }
  }
  return (
    <Layout>



      <div className="container my-3">
        <h5 className="text-center">Hello {auth?.user?.name}</h5>
        <p className="text-center">
          {
            wishlist.length > 0 
            ? (`You have ${wishlist.length} movies in your list ! ${auth?.token ? '' : "Please Login to Watch"} `)
            : ('Your WishList is empty')
          }
        </p>
        
        <div className="row">
        {
                wishlist.length > 0 ? (
                
                    wishlist.map((m) => (
                      <>
                        
                        <NavLink  to={`/movie/detail/${m._id}`} className="card col-4 col-lg-3 ">
                           
                            <div className="img">
                            <img
                                src={m.img}
                                alt={m.title}/>
                            </div>
                            <p style={{color:"black"}} className="title my-1">{m.title}</p>
                            {/* <p style={{color:"black"}} className="category">{m.category.name}</p> */}
                            <p style={{color:"black"}} className="year">{m.year}</p>
                          

                            <button className="btn"  style={{background:'#f84464', color:"white", border:"solid 1px blue"}} onClick={() => remove(m._id)}>Remove</button>
                        </NavLink>
                       
                        </>
                    ))

                ) : (
                  <>
                  <h1 className="text-center">Your WishList is empty</h1>
                  </>
                )
              }
        </div>
        
             
            </div>
          
    </Layout>
  )
}
export default Wishlist