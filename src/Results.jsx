import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            id={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            key={pet.id}
            location={`${pet.city}, ${pet.state}`}
            images={pet.images}
          />
        ))
      )}
    </div>
  );
};

export default Results;
