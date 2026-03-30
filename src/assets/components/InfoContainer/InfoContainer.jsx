import Sprite from "../Sprite/Sprite";

function InfoContainer({ data }) {
    return (
        <>
            {/* <img src={data.species.} /> */}
            <div><b>Name: </b> {data.name}</div>
            <div><b>ID: </b> {data.id}</div>
            <div><b>Taille: </b> {data.height / 10 + " m"}</div>
            <div><b>Poids: </b> {data.weight / 10 + " kg"}</div>
            <Sprite pokemonId={data.id}></Sprite>
        </>);
}

export default InfoContainer