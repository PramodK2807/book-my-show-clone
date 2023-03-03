import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet } from "react-router-dom";
import Loader from "../Loader";

const PrivateRoute = ( ) => {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()


    useEffect(() => {
        const authCheck = async () => {
            const response = await fetch(`${process.env.REACT_APP_API}/user/auth`, 
            {
                headers:{
                    "Authorization": auth?.token
                }
            })

            const data = await response.json()
            if(data.ok){
                setOk(true)
            }
            else{
                setOk(false)
            }
        }

        if(auth?.token) authCheck()
    },[auth?.token])


    return ok ? <Outlet/> : <Loader/>
}


export default PrivateRoute