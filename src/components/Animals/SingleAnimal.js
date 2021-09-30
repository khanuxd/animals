import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const SingleAnimal = () => {
    const [animal, setAnimal] = useState();
    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        if (!animal) {
            axios.get("http://localhost:3001/animals/" + id)
                .then(res => setAnimal(res.data));
        }
    });
    console.log(animal);

    let animalData = undefined;

    if (!animal) {
        animalData = <h1>Loading...</h1>
    };

    if (animal) {
        animalData = (
            <>
                <div className="animal">
                    <h1>{animal.name}</h1>
                    <img src={animal.img} alt={animal.name} />
                    <p>{animal.desc}</p>
                    <p><a href={animal.link} target="_blank">Read More in Wiki</a></p>
                </div>
                <button onClick={() => history.goBack()}>Back to Animals</button>
            </>
        )
    };

    return (
        <div>
            {animalData}
        </div>
    );
};

export default SingleAnimal;