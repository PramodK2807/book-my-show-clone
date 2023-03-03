import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Layout from "./Layout/Layout"
import {BsBookmarkHeartFill} from 'react-icons/bs'
import {FaPlayCircle} from 'react-icons/fa'
import './styles/MoviePage.css'
import { useWishlist } from "../context/WishList"
import { toast } from "react-toastify"
import { useAuth } from "../context/Auth"

const MoviePage = () => {
    let [movies, setMovies] = useState([])
    let [wishlist, setWishlist] = useWishlist()
    let [auth, setAuth] = useAuth()



    const params = useParams()

    useEffect(() => {
        getDetail()
    },[])

    const getDetail = async() => {
        let data = await fetch(`${process.env.REACT_APP_API}/movie/detail/${params.id}`)
        let result =  await data.json()
        if(result){
            setMovies(result.movie)
        }
    }

    console.log(wishlist)

  return (
    <Layout>
        <div className="container my-3 ">
            <div className="row d-flex align-items-center">


                {
                    movies.map((m) => (
                       <>
                        <div className="col-md-4 moviepage" key={m._id}>
                            <img style={{width:"90%", height:'100%'}} src={m.img} alt={m.title} />
                        </div>
                        <div className="col-md-8">
                        
                            <div className="row d-flex justify-content-between align-items-center">
                                <h1 className="col-7">{m.title}</h1>
                                <div className="col-5 text-end">Year : 2021 &nbsp; <BsBookmarkHeartFill onClick={() => {setWishlist([...wishlist,m]);
                                localStorage.setItem('wishlist',JSON.stringify([...wishlist,m]));
                            toast.success("Movie Added to Your WishList")}

                            } style={{fontSize:"35px", alignSelf:'end', cursor:"pointer"}}/></div>
                            </div>
                            <p>{m.movie_description}</p>
                            <div className="row d-flex align-items-center">
                            <p className="fw-bold col-md-8">Watch @ ₹{m.subscription}</p>


                            <button disabled={!auth?.token }  className=" btn fw-bold col-md-3 align-items-end" style={{background:'#f84464', color:'white'}}>Watch <FaPlayCircle/></button>
                            </div>
                        </div>
                        </>
                    ))
                }
            </div>
        </div>
    </Layout>
  )
}
export default MoviePage