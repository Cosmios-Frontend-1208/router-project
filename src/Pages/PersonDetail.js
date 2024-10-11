import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import NotFound from "./NotFound";

//! navigate ile gonderilen state'i yakalamak icin useLocation Hook'u kullanilabilir.
//! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek kalmaz

const PersonDetail = () => {
  // const { state: person } = useLocation();
  const [person, setPerson] = useState("")
  const [error, setError] = useState(false)

  const navigate = useNavigate();

  //   console.log(person);

  const { id } = useParams();
  console.log(id);

  const getPerson = async () => {
    try {
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      console.log(response.data.data);
      setPerson(response.data.data)
    } catch (error) {
      console.log(error);
      setError(true)
    }
  };

  useEffect(() => {
      getPerson()
  }, [])


  // if (error){
  //   return <NotFound />
  // }

  if (error) {
    return <NotFound />
  }

  return (
    <div className="container text-center mt-5">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>
      <img src={person?.avatar} alt="person-profile" />
      <p>{person?.email}</p>
      <div>
        <button className="btn btn-success me-3" onClick={() => navigate("/")}>
          Go Home
        </button>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
