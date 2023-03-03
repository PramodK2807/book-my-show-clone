import { useEffect, useState } from "react";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import ImageSlider from "../components/Layout/ImageSlider";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader";
import '../components/styles/MovieShow.css'
import { useAuth } from "../context/Auth";
import Banner from "./Banner";
import CurrentEvents from "./CurrentEvents";

const Homepage = () => {
  const [movies, setMovies] = useState([]);
  const [auth, setAuth] = useAuth()

  const getMovies = async () => {
    let data = await fetch(`${process.env.REACT_APP_API}/movies`);
    let result = await data.json();
    setMovies(result.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  // console.log(movies)

  let box = document.querySelector('.card-container');
    const leftS = () => {
        let width = box.offsetWidth
        box.scrollLeft = box.scrollLeft - width;
    }

    let rightS = () => {
        let width = box.offsetWidth
        box.scrollLeft = box.scrollLeft + width;
    }

    

  // console.log(movies);
  return (
    <Layout title={"Book My Show - Best movies and show"}>
      

      <ImageSlider/>

{/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}



      <div className="container my-4">
            <div className="header ">
                <p >
                    {/* {props.header} */} Latest Movies
                </p>
                <Link className="text-danger seemore" to='/seeall' >See more</Link>
            </div>


            <div className="main-div">
                <div className="cover">
                    <div onClick={leftS} className="icon left">
                        <AiOutlineDoubleLeft/>
                    </div>

                       <div className="card-container">


                        {
                          movies.length > 0 ?

                            movies.splice(0,10).map((m) => (
                              
                                <Link className="card" to={`/movie/detail/${m._id}`} key={m._id}>
                                    <div className="img">
                                        <img src={m.img} alt="f" />
                                    </div>
                                    <p className="title">{m.title}</p>
                                    <p className="category text-dark text-bold">{m.category.name}</p>
                                </Link>
                            ))
                            :
                            <Loader/>
                        }

                       </div>

                       <div onClick={rightS} className="icon right">
                        <AiOutlineDoubleRight/>
                    </div>
                </div>
            </div>
        </div>

     <Banner/>

     <CurrentEvents/>



    </Layout>
  );
};
export default Homepage;
