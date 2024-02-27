import React, { useContext} from 'react';
import styled from 'styled-components';
import pokeDataContext from '../context/pokeDataContext';

export const SrcPokemon = () => {
 
  const {srcImput, setSrcImput} = useContext(pokeDataContext)
  const handleInputChange = (event) => {
    setSrcImput(event.target.value);
  };

  return (
    <Div>
      <Input 
        type="text" 
        value={srcImput} 
        onChange={handleInputChange} 
        placeholder="Search..." 
      />
    </Div>
  );
};
const Input= styled.input`
border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
` 
const Div = styled.div`
display: flex;
align-items: center;
justify-content:center;
margin-left:30px;
`

    



