import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth";
import { Outlet, useParams } from "react-router-dom";
import Loader from "../Loader";

const AdminRoute = ( ) => {
    const [ok, setOk] = useState(false)
    const [auth, setAuth] = useAuth()

    const params = useParams()

    

    useEffect(() => {
        const authCheck = async () => {
            const response = await fetch(`${process.env.REACT_APP_API}/admin/auth/${params.id}` )
            
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


    return ok ? <Outlet/> : <Loader path=""/>
}


export default AdminRoute