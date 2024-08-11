import './App.css';
import ImgHolder from './components/ImgHolder';
import { useState } from 'react';
import MainBtn from './components/MainBtn';

function App() {

  const [imgUrl, setimgUrl] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png")

  const loadNextPokemon = () => {
    
  }

  return (
    <>
    <p className='text-3xl text-center mt-10'>Pokémon</p>
    <p className='text-center text-2xl'>Smash Or Pass</p>
    <div className='flex items-center justify-center'>
      <ImgHolder src = {imgUrl}/>
    </div>
    <div className='flex items-center justify-center gap-10 my-5'>
    <MainBtn txt = "Smash" onClick={loadNextPokemon}/>
    <MainBtn txt = "Pass" onClick={loadNextPokemon}/>
    </div>
    </>
  );
}

export default App;
