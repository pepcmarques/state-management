import { useContext } from "react";
import { usePokemon, PokemonProvider } from "./store.tsx";

const PokemonList = () => {
  const { pokemon } = usePokemon();

  return (
    <div>
      {pokemon.map((p) => (
        <div key={p.id}>{p.name.english}</div>
      ))}
    </div>
  );
};

function App() {
  return (
    <>
      <div>
        <PokemonProvider>
            <PokemonList />
        </PokemonProvider>
      </div>
    </>
  );
}

export default App;
