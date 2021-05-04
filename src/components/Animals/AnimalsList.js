import React from "react";
import AnimalCard from "./AnimalCard";

const AnimalsList = ({ animals }) => {
    return (
        <div className="posts">
            {animals.map((a) => (
                <AnimalCard
                    key={a.id}
                    name={a.name}
                    aclass={a.aclass}
                    img={a.img}
                    desc={a.desc}
                    link={a.link}
                />
            ))}
        </div>
    );
};

export default AnimalsList;