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
  
  //Delete
    function deleteSchool(u) {
    ref
      .doc(u.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }
  
    // EDIT FUNCTION
  function editSchool(updatedSchool) {
    setLoading();
    ref
      .doc(updatedSchool.id)
      .update(updatedSchool)
      .catch((err) => {
        console.error(err);
      });
  }

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
    
//             <button onClick={() => deleteSchool(school)}>X</button>
//             <button
//               onClick={() =>
//                 editSchool({ title: school.title, desc, id: school.id })
//               }
//             >
//               Edit
//             </button>
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



//Input Field Dev World



<Fragment>
      <h1>Schools (SNAPSHOT)</h1>
      <div className="inputBox">
        <h3>Add New</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea value={desc} onChange={(e) => setDesc(e.target.value)} />
        <button onClick={() => addSchool({ title, desc, id: uuidv4() })}>
          Submit
        </button>
      </div>
      <hr />
      {loading ? <h1>Loading...</h1> : null}
      {schools.map((school) => (
        <div className="school" key={school.id}>
          <h2>{school.title}</h2>
          <p>{school.desc}</p>
          <div>
            <button onClick={() => deleteSchool(school)}>X</button>
            <button
              onClick={() =>
                editSchool({ title: school.title, desc, id: school.id })
              }
            >
              Edit
            </button>
          </div>
        </div>
      ))}
    </Fragment>
