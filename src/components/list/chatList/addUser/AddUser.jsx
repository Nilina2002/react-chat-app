import React from "react";
import "./AddUser.css";

const AddUser = () => {
  return (
    <div className="adduser">
      <form action="">
        <input type="text" placeholder="Username" name="username" id="" />
        <button>Search</button>
      </form>
      <div className="user">
        <div className="detail">
          <img src="./avatar.png" alt="" />
          <span>Charitha</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
