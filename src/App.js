import './App.css';
import ImgHolder from './components/ImgHolder';
import { useState } from 'react';
import MainBtn from './components/MainBtn';

function App() {

  const [imgUrl, setimgUrl] = useState(null)
  const [name, setname] = useState(null)

  const loadNextPokemon = () => {
    let x = Math.floor((Math.random() * 1025) + 1);
    let req = fetch(`https://pokeapi.co/api/v2/pokemon/${x}`)
    req.then((res) => {
      return res.json()
    }).then((data) => {
      setimgUrl(data.sprites.other["official-artwork"].front_default)
      setname(data.name[0].toUpperCase() + data.name.slice(1))
    })
  }

  return (
    <>
    <p className='text-3xl text-center mt-10'>Pokémon</p>
    <p className='text-center text-2xl'>Smash Or Pass</p>
    <div className='flex flex-col items-center justify-center'>
      <ImgHolder src = {imgUrl}/>
      <h1 className='text-center text-2xl'>{name}</h1>
    </div>
    <div className='flex items-center justify-center gap-10 my-5'>
    <MainBtn txt = "Smash" onClick={loadNextPokemon}/>
    <MainBtn txt = "Pass" onClick={loadNextPokemon}/>
    </div>
    </>
  );
}

export default App;
