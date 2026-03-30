function Sprite({ pokemonId }) {

    const SPRITE_PATH = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon"

    return (
        <>
            <img src={`${SPRITE_PATH}/${pokemonId}.png`} />
            <img src={`${SPRITE_PATH}/shiny/${pokemonId}.png`} />
        </>
    );
}

export default Sprite