import React, { useState, useEffect } from "react";

import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  const auth = getAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  const { email, password } = formData;

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <buuton className="logOut" type="button" onClick={onLogout}>
          Logout
        </buuton>
      </header>
    </div>
  );
}

export default Profile;
