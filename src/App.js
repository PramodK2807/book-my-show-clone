
import { Route, Routes } from 'react-router-dom';
import Categories from './components/Layout/Categories';
import MoviePage from './components/MoviePage';
import AdminRoute from './components/Routes/AdminRoute';
import PrivateRoute from './components/Routes/Private';
import SearchPage from './components/SearchPage';
import SeeAll from './components/SeeAll';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminProfile from './pages/Admin/AdminProfile';
import AllUser from './pages/Admin/AllUser';
import CreateCategory from './pages/Admin/CreateCategory';
import NewMovie from './pages/Admin/NewMovie';
import UpdateMovie from './pages/Admin/UpdateMovie';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/user/Dashboard';
import Update from './pages/user/Update';
import UserProfile from './pages/user/UserProfile';
import Watched from './pages/user/Watched';
import Wishlist from './pages/user/Wishlist';
function App() {
  return (

    <>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
          <Route path="/dashboard" element={<PrivateRoute/>}>
            <Route path='user' element={<Dashboard/>} />
            <Route path='user/profile' element={<UserProfile/>} />
            <Route path='user/update/:id' element={<Update/>} />
            {/* <Route path='user/wishlist' element={<Wishlist/>} /> */}
            <Route path='user/watched' element={<Watched/>} />
          </Route>
          <Route path="/dashboard" element={<AdminRoute/>}>
            <Route path='admin/:id' element={<AdminDashboard/>} />
            <Route path='admin/profile' element={<AdminProfile/>} />
            <Route path='admin/create/category' element={<CreateCategory/>} />
            <Route path='admin/create/movie' element={<NewMovie/>} />
            <Route path='admin/update' element={<UpdateMovie/>} />
            <Route path='admin/usersDetails' element={<AllUser/>} />
          </Route>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/search' element={<SearchPage/>} />
        <Route exact path='/signup' element={<Register/>} />
        <Route exact path='/categories/:id' element={<Categories/>} />
        <Route exact path='/movie/detail/:id' element={<MoviePage/>} />
        <Route exact path='/wishlist' element={<Wishlist/>} />
        <Route exact path='/seeall' element={<SeeAll/>} />


        

      </Routes>
    </>

  );
}

export default App;
