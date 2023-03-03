import AdminMenu from "../../components/Layout/AdminMenu"
import Layout from "../../components/Layout/Layout"

const AllUser = () => {
  return (
    <Layout>
    <div className="container my-4">
    <h1 className='text-center my-5'>Admin Panel</h1>
      <div className="row">
        <div className="col-md-4">
          <AdminMenu/>
        </div>
            <div className="col-md-8 mx-auto">
            <table class="table-secondary">
                <tr>
                    <th>S.no.</th>
                    <th>S.no.</th>
                    <th>S.no.</th>
                    <th>S.no.</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                    <td>1</td>
                </tr>
            </table>
            </div>
      </div>
    </div>
</Layout>
  )
}
export default AllUser