import { NavLink, useNavigate } from "react-router-dom"
import {FiLogOut} from 'react-icons/fi'
import { useAuth } from "../../context/Auth"
import { useEffect } from "react"

const UserMenu = () => {

    const [auth, setAuth] = useAuth()
    let navigate = useNavigate()

  return (
    
    <div style={{maxWidth:'350px', margin:'10px auto'}}>
        
      <ul className="list-group">
        <NavLink to='/dashboard/user/profile' className="list-group-item">My Profile</NavLink>
        {/* <NavLink to='/dashboard/user/create/category' className="list-group-item">Create New Movie Category</NavLink> */}
        <NavLink to={`/dashboard/user/update/${auth?.user?._id}`} className="list-group-item">Update Profile</NavLink>
        {/* <NavLink to='/dashboard/user/wishlist' className="list-group-item">My Wishlist</NavLink> */}
        <NavLink to='/dashboard/user/watched' className="list-group-item">Watched Movies</NavLink>
        
        
      </ul>
    </div>
  )
}
export default UserMenu