import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

export default function AddToFire() {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState([]);

  const ref = firebase.firestore().collection("users");

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
  });

  const onSubmit = (data) => {
    ref.doc(uuidv4()).set({
      name: data.name,
      prof: data.prof,
      market: data.market,
    });
  };

  //   function addUser() {}

  return (
    <>
      <div className="container">
        <h2>
          <u>Users</u>
        </h2>
        {user.map((u, index) => (
          <div key={index}>
            <h2>{u.name}</h2>
            <h2>{u.prof}</h2>
            <h2>{u.market}</h2>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" placeholder="type your name" ref={register} />
        <br />
        <input name="prof" placeholder="type your profession" ref={register} />
        <br />
        <input name="market" placeholder="type the market" ref={register} />
        <br />
        <input type="submit" /> <br />
      </form>
    </>
  );
}
