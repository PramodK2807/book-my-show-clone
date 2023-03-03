import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../../components/Layout/Layout"
import UserMenu from "../../components/Layout/UserMenu"
import { useAuth } from "../../context/Auth";

const Update = () => {

  let [email, setEmail] = useState("");
  let [name, setName] = useState("");
  let [mobile, setMobile] = useState("");
  let [password, setPassword] = useState("");

  let [auth, setAuth] = useAuth()
  let params = useParams()
  // console.log(auth)


  const update = async(e) => {
    e.preventDefault()

    let data = await fetch(`${process.env.REACT_APP_API}/update/profile/${params.id}`, {method:'PUT', 
    body: JSON.stringify({email, password, name, mobile}),
    headers: { "Content-Type": "application/json" },
  })

  let result = await data.json()
  // console.log(result)
  if(result.success){
    
    setAuth({
      ...auth,
      user: result?.updateUser, })
      let ls = localStorage.getItem('auth')
      ls = JSON.parse(ls)
      ls.user = data.updateUser
      localStorage.setItem('auth', JSON.stringify(ls))
      toast.success(result.message);

  }

  }

  return (
    <Layout>
    <div className="container my-4">
    <h1 className='text-center my-5'>User Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <UserMenu/>
        </div>
        <div className="col-md-8 ">
        <div className="wrapper my-0" style={{minHeight:"300px"}}>
        
        <form className="mb-0">
        <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="name"
              id="name"
              placeholder={auth?.user?.name}
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder={auth?.user?.email}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>


          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="number"
              name="mobile"
              id="mobile"
              placeholder={auth?.user?.mobile}
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
            />
          </div>
        
    
          
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Enter Old Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button onClick={(e) => update(e)}  type="submit" className="btn " >
            Update
          </button>
        </form>
      </div>
        </div>
      </div>
    </div>
</Layout>
  )
}
export default Update