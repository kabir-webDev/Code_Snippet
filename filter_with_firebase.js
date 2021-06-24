import React, { useState, useEffect } from "react";
import { projectFirestore } from "../../firebaseConfig";

function Demo2() {
  const [user, setUser] = useState({});
  const onSubmit = (data) => {
    setUser(data);
  };
  const [school, setSchool] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = projectFirestore.collection("card_info");

  function getSchool() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setSchool(items);
      setLoading(false);
    });
  }
  useEffect(() => {
    getSchool();
  }, []);

  const saveStudent = async (data) => {
    await projectFirestore.collection("card_info").add({
      name: "Sikder Saheb",
      designation: "Motivator",
      age: 55,
      jobStatus: "Job Holder",
      phone: +880123456789,
      address: "Banani, Dhaka",
    });
  };

  const [boyosh, setBoyosh] = useState(25);
  const handleAge1 = () => {
    setBoyosh(55);
  };
  const handleAge2 = () => {
    setBoyosh(25);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Students Information</h1>
      <button onClick={saveStudent}>Enter Students</button>
      <br />
      <button onClick={handleAge1}>55</button>
      <br />
      <button onClick={handleAge2}>25</button>
      {school
        .filter((name) => name.age == boyosh)
        .map((student, index) => (
          <div key={index}>
            <h2>Name: {student.name}</h2>
            <p>Expertise: {student.designation}</p>
            <p>Age: {student.age}</p>
            <p>Job Status: {student.jobStatus}</p>
            <p>Contact Number: {student.phone}</p>
            <p>Address: {student.address}</p>
            <br />
          </div>
        ))}
    </div>
  );
}

export default Demo2;
