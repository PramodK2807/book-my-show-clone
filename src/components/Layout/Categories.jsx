import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Loader from "../Loader";
import Layout from "./Layout";

const Categories = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      getMovies();
    }
  }, [params.id]);

  const getMovies = async () => {
    let data = await fetch(
      `${process.env.REACT_APP_API}/category/${params.id}`
    );
    let result = await data.json();
    console.log(result);
    if (result) {
      setMovies(result.movies);
      setCategory(result.category);
    } else alert("No results found");
  };

  return (
    <Layout>



<div className="container my-5">
        <div className="row mx-auto " style={{gap:'15px'}}>
        {
               movies.length > 0 ?
                
                   ( movies.map((m) => (
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
                    )))

                    :

                    (
                      <Loader/>
                    )

                
              }
        </div>
        
             
            </div>
          
    </Layout>
  );
};
export default Categories;
