import { createContext, useContext, useEffect, useState } from "react";


const MovieContext = createContext();

const MovieProvider = ({children}) => {
    let [movies, setMovies] = useState([])

    const getMovie = async() => {
        let data = await fetch(`${process.env.REACT_APP_API}/movies`)
        let movie = await data.json()
        // console.log(movie)
        if(movie.success) {
            setMovies(movie.movies)
        }
    }
// console.log(movies);
    useEffect(() => {
        getMovie()
    },[])

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {children}
        </MovieContext.Provider>
        
    )
   
}

const useMovies = () => useContext(MovieContext)

export {useMovies, MovieProvider}