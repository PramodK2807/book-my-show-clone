import AdminMenu from "../../components/Layout/AdminMenu"
import Layout from "../../components/Layout/Layout"
import { useAuth } from "../../context/Auth"

const AdminProfile = () => {

    let [auth, setAuth] = useAuth()
    // console.log(auth)
  return (
    <Layout>
        <div className="container my-4">
        <h1 className='text-center my-5'>Admin Panel</h1>
          <div className="row">
            <div className="col-md-4">
              <AdminMenu/>
            </div>
            <div className="col-md-8 pl-5">
              <p className="fw-bold">Name : {auth.user.name}</p>
              <p className="fw-bold">Email : {auth.user.email}</p>
              <p className="fw-bold">Mobile No. : {auth.user.mobile}</p>
              <p className="fw-bold">Role : {auth.user.isAdmin ? "Admin" : "User"}</p>
            </div>
          </div>
        </div>
    </Layout>
  )
}
export default AdminProfile