import React from "react";
import data from "../data";

const Courses = () => {
  return (
    <div className="container text-center my-5">
      <h1>OUR COURSES</h1>
      <div className="row justify-content-center gap-4 align-items-center mt-4">
        {data.map((course) => {
          const { id, img, name, text } = course;
          return (
            <div key={id} className="col d-flex justify-content-center">
              <div className="card d-flex flex-col align-items-center">
                <img
                  src={img}
                  alt=""
                  style={{ width: "18rem" }}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{text}</p>
                  <button className="btn btn-danger">Detail</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
