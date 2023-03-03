import AdminMenu from "../../components/Layout/AdminMenu"
import Layout from "../../components/Layout/Layout"

const NewMovie = () => {
  return (
    <Layout>
    <div className="container my-4">
    <h1 className='text-center my-5'>Admin Panel</h1>
      <div className="row">
        <div className="col-md-4">
          <AdminMenu/>
        </div>
        
      </div>
    </div>
</Layout>
  )
}
export default NewMovie