import { useState } from "react";
import React from "react";
import "../styles/style.css";

export default function PersonalInformation() {
  const [personal, setPersonal] = useState({
    firstName: '', lastName: '', title: '', adress: '',
    phone: '', email: ''
  });
  const [edit, setEdit] = useState(true);

  function handleChange(e) {
    setPersonal({
      ...personal,
      [e.target.name]: e.target.value,
    });
  }

  function changeMode() {
    setEdit(!edit);
  }

  return (
    <div className="formPersonal">
      {!edit ? (
        <div className="personalView">
          <p>First Name: {personal.firstName}</p>
          <p>Last Name: {personal.lastName}</p>
          <p>Title: {personal.title}</p>
          <p>Adress: {personal.adress}</p>
          <p>Phone Number: {personal.phone}</p>
          <p>Email: {personal.email}</p>
        </div>
      ) : (
        <div>
          <h3>Personal Information</h3>
          <input
            value={personal.firstName}
            type="text"
            placeholder="First name"
            name="firstName"
            onChange={handleChange}
          />
          <input
            value={personal.lastName}
            type="text"
            placeholder="Last name"
            name="lastName"
            onChange={handleChange}
          />
          <input
            value={personal.title}
            type="text"
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
          <input
            value={personal.adress}
            type="text"
            placeholder="Adress"
            name="adress"
            onChange={handleChange}
          />
          <input
            value={personal.phone}
            type="text"
            placeholder="Phone number"
            name="phone"
            onChange={handleChange}
          />
          <input
            value={personal.email}
            type="text"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </div>
      )}
      <p>
        <button onClick={changeMode} type="button">
          {edit ? "Submit" : "Edit"}
        </button>
      </p>
    </div>
  );
}
