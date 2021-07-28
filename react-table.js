import React, { useState, useEffect } from "react";
import { db } from "../../../config/firebaseConfig";
import MaterialTable from "material-table";

function PermanentDrawerLeft() {
  const [user, setUser] = useState([]);
  const [data, setData] = useState([]);
  const columns = [
    { title: "ID", field: "id" },
    { title: "Username", field: "username" },
    { title: "Name", field: "name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
    { title: "Web Link", field: "website" },
  ];

  const ref = db.collection("vax-register");

  function getUsers() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setUser(items);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);
  console.log(user);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((resp) => {
        setData(resp);
      });
  }, []);

  return (
    <div className="App">
      <h4 align="center">Registered Person for Vaccine</h4>
      <MaterialTable title="Employee Data" data={data} columns={columns} />
    </div>
  );
}

export default PermanentDrawerLeft;
