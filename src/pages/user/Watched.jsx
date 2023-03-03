import Layout from "../../components/Layout/Layout"
import UserMenu from "../../components/Layout/UserMenu"

const Watched = () => {
  return (
    <Layout>
    <div className="container my-4">
    <h1 className='text-center my-5'>User Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <UserMenu/>
        </div>
        <div className="col-md-8 pl-5">
          
        </div>
      </div>
    </div>
</Layout>
  )
}
export default Watched