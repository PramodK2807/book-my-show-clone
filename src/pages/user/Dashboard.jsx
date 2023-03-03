
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";

const Dashboard = () => {
  return (
    <Layout>
      <div className="container my-4">
        <h1 className='text-center my-5'>User Dashboard</h1>
          <div className="row">
            <div className="col-md-4">
              <UserMenu/>
            </div>
            <div className="col-md-8 text-center">
              <h3>Welcome to the User Dashboard, <br />
                You can see your details here and can update </h3>
            </div>
          </div>
        </div>
    </Layout>
  );
};
export default Dashboard;
