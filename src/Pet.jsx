import { Link } from "react-router-dom";

const Pet = ({ name, animal, breed, images, location, id }) => {

    let hero = "http://pet-images.dev-apis.com/pets/none.jpg";
    if (images.length){
        hero = images[0];
    }

    return (
        <Link to={`/details/${id}`} className="pet">
            <div className="image-container">
                <img src={hero} alt={name} />
            </div>
            <div className="info">
                <h1>{name}</h1>
                <h2>{animal} - {breed} - {location}</h2>
            </div>
        </Link>
    );
};


//Same output
// const Pet = (props) => { */}
//     return React.createElement("div", null, [
//         React.createElement("h1", null, props.name),
//         React.createElement("h2", null, props.animal),
//         React.createElement("h2", null, props.breed),
//     ]);
// };

export default Pet;