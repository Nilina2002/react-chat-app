import { React, useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="item">
        <h2>Welcome, back</h2>
        <form onSubmit={handleLogin}>
          <input type="text" name="email" placeholder="Email" id="" />
          <input type="password" name="password" placeholder="Password" id="" />
          <button>Sign In</button>
        </form>
      </div>
      <div className="seperator"></div>
      <div className="item">
        <h2>Create an Account</h2>
        <form action="">
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Upload an image
          </label>
          <input
            type="file"
            name=""
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input type="text" name="username" placeholder="Username" id="" />
          <input type="text" name="email" placeholder="Email" id="" />
          <input type="password" name="password" placeholder="Password" id="" />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
