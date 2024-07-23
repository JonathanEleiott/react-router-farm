import { useParams, useNavigate } from "react-router-dom";

const FarmAnimal = () => {
  const { animal, name } = useParams();
  const navigate = useNavigate();

  const adoptAnimal = () => {
    console.log(`Adopting Animal`);
    // write code to remove animal from API

    navigate('/');
  }

  return (
    <>
      <h2>Farm Animal</h2>

      {
        animal ? <h3>Animal Selected: {animal}</h3> : null
      }

      {
        name ? <h3>Animal Details for {name}</h3> : null
      }

      <button onClick={adoptAnimal}>Adopt Animal</button>
    </>
  )
}

export default FarmAnimal;