import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import Layout from "./Layout/Layout";

const SeeAll = () => {

    const [movie, setMovie] = useMovies()

    useEffect(() => {
      setMovie(movie)
    }, [])
  return (
    <Layout>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide container carousel-margin"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner mt-3">
            <div className="carousel-item active">
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677481946350_regionalweb.jpg"
                className="d-block img-fluid"
                alt="..."
              />
            </div>

            <div className="carousel-item">
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1670502578966_web.jpg"
                className="d-block img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1677481946350_regionalweb.jpg"
                className="d-block img-fluid"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://assets-in.bmscdn.com/promotions/cms/creatives/1676269481715_rtuindiaweb.jpg"
                className="d-block img-fluid"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>



      <div className="container my-5">
        <h1 className="mb-5">All Movies</h1>
        <div className="row mx-auto " style={{gap:'15px'}}>
        {
               
                
                    movie.map((m) => (
                        <NavLink  to={`/movie/detail/${m._id}`}  className="card col-md-3 p-0 " style={{width:'22%'}}>
                            <div className="img">
                            <img
                                src={m.img}
                                alt={m.title}/>
                            </div>
                            <p style={{color:"black"}} className="title">{m.title}</p>
                            {/* <p style={{color:"black"}} className="category">{m.category.name}</p> */}
                            <p style={{color:"black"}} className="year">{m.year}</p>
                        </NavLink>
                    ))

                
              }
        </div>
        
             
            </div>
          
    </Layout>

    
  );
};

export default SeeAll;
