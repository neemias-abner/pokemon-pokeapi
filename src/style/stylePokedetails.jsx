
import styled from "styled-components";
const Main = styled.main`
display: flex;
align-items: center;
justify-content:center;
margin: 0;
min-width: 100vw;
min-height: 100vh;
background:${({ theme }) => (theme.mainColor)};

`
const Card = styled.div`
margin:1vw  ;
padding: 1vw;
border-radius: 15px;
border: 1px solid transparent;
min-width: 80%;
min-height: 50vh;
max-height: 80vh;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content:center;
color:${({theme})=>(theme.color)};
background:${({ theme }) => (theme.cardColor)};
@media (max-width: 768px) {
    flex-direction: column;
    max-height:100%;
    flex-wrap: nowrap;
    
  }
`
const BasicDetails = styled.div`
display:flex;
justify-content: space-evenly;

`
const MovesAndAbilities = styled.div`
display:flex;
justify-content: space-evenly;
&>*{theme
    display:flex;
    flex-direction: row;
    padding: 10px;
    background:${({ theme }) => (theme.background)};
    color:${({ theme }) => (theme.color)};
    overflow-y: scroll;
    border-radius: 8px;
    border: 1px solid transparent;
    height: 300px;
    width: 250px;
    border-radius: 8px;
    border: 1px solid trensparent;   
}
@media (max-width: 700px) {
    flex-direction: column;
    &>*{
        margin:10px;
    }
  }
`
const PokemonName = styled.h3`
`
const Type = styled.h4`
display:flex;
border-radius: 8px;
border: 1px solid transparent;
padding: 0.6em 1.2em;
background:${({ color }) => (color)};
color:${({theme})=>(theme.color)}
`
const typeColours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};
export{
    Main,
    Card,
    BasicDetails,
    MovesAndAbilities,
    PokemonName,
    Type,
    typeColours
}
