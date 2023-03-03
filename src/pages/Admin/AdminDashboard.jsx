import AdminMenu from "../../components/Layout/AdminMenu"
import Layout from "../../components/Layout/Layout"

const AdminDashboard = () => {
  return (
    <Layout>
        <div className="container my-4">
        <h1 className='text-center my-5'>Admin Panel</h1>
          <div className="row">
            <div className="col-md-4">
              <AdminMenu/>
            </div>
            <div className="col-md-8 text-center">
              <h3>Welcome to the Admin Dashboard, <br />
                You can create here your items</h3>
            </div>
          </div>
        </div>
    </Layout>
  )
}
export default AdminDashboard