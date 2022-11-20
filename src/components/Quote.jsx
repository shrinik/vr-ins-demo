import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import VR from "./VR";

function Quote() {
  const [collision, setCollision] = useState(false);
  const [tireProt, setTireProt] = useState(false);
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="vr"
          element={<VR collision={collision} tireProt={tireProt} />}
        />
      </Routes>
      <button onClick={() => setCollision(!collision)}>
        {collision ? "Remove" : "Add"} Collision Damage coverage
      </button>
      <button onClick={() => setTireProt(!tireProt)}>
        {tireProt ? "Remove" : "Add"} Tire Damage coverage
      </button>
      <nav>
        <button>
          <Link to="vr">Finish</Link>
        </button>
      </nav>
    </React.Fragment>
  );
}

export default Quote;
