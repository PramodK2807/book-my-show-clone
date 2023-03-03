import { useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"
import UserMenu from "../../components/Layout/UserMenu"
import { useAuth } from "../../context/Auth"

const UserProfile = () => {

    let [auth, setAuth] = useAuth()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [role, setRole] = useState('')

    useEffect(() => {
      const {email, name, mobile, role} = auth?.user
     setName(name)
     setEmail(email)
     setMobile(mobile)
     setRole(role)
    }, [auth?.user])
  return (
    <Layout>
        <div className="container my-4">
        <h1 className='text-center my-5'>User Dashboard</h1>
          <div className="row">
            <div className="col-md-4">
              <UserMenu/>
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
export default UserProfile