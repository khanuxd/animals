import React, { useState, useEffect } from "react";
import AnimalNew from "../Animals/AnimalNew";
import AnimalsList from "../Animals/AnimalsList";

import axios from "axios";

const Main = () => {
  const [animals, setAnimals] = useState([]);
  const [animalNew, setAnimalNew] = useState({
    name: "",
    aclass: "mammals",
    img: "",
    desc: "",
    link: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/animals")
      .then((res) => setAnimals(res.data));
  }, []);

  const valueChangeHandler = (e) => {
    setAnimalNew({ ...animalNew, [e.target.name]: e.target.value });
  };

  const submitAnimal = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/animals", animalNew)
      .then(() => {
        return axios.get("http://localhost:3001/animals");
      })
      .then((res) => setAnimals(res.data));
    e.target.reset();
  };

  return (
    <main>
      <AnimalsList animals={animals} />
      <AnimalNew change={valueChangeHandler} submit={submitAnimal} />
    </main>
  );
};

export default Main;
