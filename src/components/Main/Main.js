import React, { useState, useEffect } from "react";
import AnimalNew from "../Animals/AnimalNew";
import AnimalsList from "../Animals/AnimalsList";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import SingleAnimal from "../Animals/SingleAnimal";

const Main = () => {
  const [animals, setAnimals] = useState([]);
  const [animalNew, setAnimalNew] = useState({
    name: "",
    aclass: "mammals",
    img: "",
    desc: "",
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
      <Switch>
        <Route path="/:id">
          <SingleAnimal />
        </Route>
        <Route path="/" exact>
          <AnimalsList animals={animals} />
          <AnimalNew change={valueChangeHandler} submit={submitAnimal} />
        </Route>
      </Switch>
    </main>
  );
};

export default Main;
