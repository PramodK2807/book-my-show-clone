import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "../components/Layout/Layout";

const Register = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setCPassword] = useState("");
  let [mobile, setMobile] = useState("");
  let [error, setError] = useState(false);

  const signup = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setError(true);
      toast.error("Password doesn't match");
      return false;
    }
    

    try {
        if (!name || !email || !password || !cpassword || !mobile) {
            setError(true);
            toast.error("Please enter all details");
            return false;
          }
      let response = await fetch(`${process.env.REACT_APP_API}/register`, {
        method: "POST",
        body: JSON.stringify({ name, email, password, cpassword, mobile }),
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.json();
      if (data.success) {
        toast.success(data.message);
      }
      else{
        toast.error(data.message);
      }
    } catch (error) {
        // console.log(error);
        toast.error("Something went wrong")
    }

  };

  // console.log(process.env.REACT_APP_API);

  return (
    <Layout>
      <div className="wrapper">
        <h1 style={{ textAlign: "center", marginBottom: "10px " }}>
          Sign Up Form
        </h1>
        <div className="logo">
          <img
            src="https://e7.pngegg.com/pngimages/919/445/png-clipart-bookmyshow-office-android-ticket-android-text-logo.png"
            alt=""
          />
        </div>
        <div className="text-center mt-4 name">Book My Show</div>
        <form className="p-3 mt-3">
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="Name"
              id="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          {/* {
              error && !name && <div style={{marginTop:'2px', paddingTop:'0', color:"red"}}>Please Enter Name</div>
            } */}
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          {/* {
              error && !email && <div style={{marginTop:'2px', paddingTop:'0', color:"red"}}>Please Enter Email</div>
            } */}
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* {
              error && !password && <div style={{marginTop:'2px', paddingTop:'0', color:"red"}}>Please Enter Password</div>
            } */}

          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="cpassword"
              id="cpassword"
              placeholder="Confirm Password"
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
          </div>

          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="number"
              name="mobile"
              id="mobile"
              placeholder="Enter Phone"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <button type="submit" className="btn mt-3" onClick={(e) => signup(e)}>
            Sign Up
          </button>
        </form>

        <p>
          Already have account <Link to="/login">Login</Link>{" "}
        </p>
      </div>
    </Layout>
  );
};
export default Register;
