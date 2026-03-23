import React from "react"

function App() {
  const [pokemonData, setPokemonData] = React.useState({})
  const [count, setCount] = React.useState(1)

  React.useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${count}`)
      .then(res => res.json())
      .then(data => setPokemonData(data))
  }, [count])

  return (
    <div>
      <h2>Le numéro est {count}</h2>
      <button onClick={() => setCount(prev => prev + 1)}>Afficher le prochain Pokémon</button>
      <div><b>Name:</b> {pokemonData.name}</div>
    </div>
  )
}

export default App;