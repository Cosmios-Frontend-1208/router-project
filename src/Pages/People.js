import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const People = () => {
  const [name, setName] = useState("Cosmios");
  const [people, setPeople] = useState([]); // react-hook

  const navigate = useNavigate(); // react-hook

  // const people = []

  const getPeople = () => {
    // HTTP Request

    // request

    // response

    fetch("https://reqres.in/api/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setPeople(data.data);
      })
      .catch((err) => console.log(err));
  };

  // Component Life Cycle

  useEffect(() => {
    // react-hook
    // console.log('Uygulama baslatildi')
    getPeople();
  }, []);

  return (
    <div className="container text-center mt-4">
      <h1>PEOPLE LIST</h1>
      {/* <p>{name}</p>
      <button onClick={() =>{
        //  name = 'Akademi'
        setName('Akademi')
         console.log(name)
      }}>Degistir</button> */}
      <div className="row justify-content-center">
        {people.map((person) => {
          return (
            <div
              className="col-lg-4 col-md-6 col-sm-12"
              key={person.id}
              // onClick={() => {
              //   navigate(`/people/${person.id}`, {state: person})
              // }}

              //! absolute path
              // onClick={() => {
              //   navigate(`/people/${person.id}`)
              // }}

              //! relative path
              onClick={() => {
                navigate(`${person.id}`);
              }}
            >
              <img src={person.avatar} />
              <h6>
                {person.first_name} {person.last_name}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default People;
