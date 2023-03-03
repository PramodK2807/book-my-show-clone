import Layout from "./Layout/Layout"
import img from '../../src/image/loading-gif.gif'
import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

const Loader = () => {

  // useEffect(() => {
  //   const interval = setInterval(() =>{
  //     setCount((prevValue) => --prevValue)
  //   }, 1000)

  //   count===0 && navigate(`/${path}`, {
  //     state:location.pathname
  //   })


  //   return () => clearInterval(interval)
  // },[count, navigate, location, path])
  return (
    <>
        <div style={{width:"200px", height:"200px", margin:"auto"}}>
          
          <img
             style={{width:'100%', height:'100%', margin:"auto"}} src={img} alt="Loader" />
             <p className="text-center">Loading</p>
        </div>
    </>
  )
}
export default Loader