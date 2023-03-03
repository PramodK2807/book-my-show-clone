import { FiLogOut } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import '../styles/AdminMenu.css'

const AdminMenu = () => {
  const [auth, setAuth] = useAuth()

  const logout = () => {
    localStorage.removeItem('auth')
    setAuth()
}
  return (
    <div>
        
      <ul className="list-group">
        <NavLink to='/dashboard/admin/profile' className="list-group-item">My Profile</NavLink>
        <NavLink to='/dashboard/admin/create/category' className="list-group-item">Create New Movie Category</NavLink>
        <NavLink to='/dashboard/admin/create/movie' className="list-group-item">Create New Movie</NavLink>
        <NavLink to='/dashboard/admin/update' className="list-group-item">Update Existing Movie</NavLink>
        <NavLink to='/dashboard/admin/usersDetails' className="list-group-item">Get All Users</NavLink>
        <NavLink onClick={(e) => logout(e)} to='/' className="list-group-item">Logout <FiLogOut/></NavLink>
        
      </ul>
    </div>
  );
}
export default AdminMenu