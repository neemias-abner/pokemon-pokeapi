import { useContext, useEffect, useState } from "react";
import pokeDataContext from "../context/pokeDataContext";
import { Button } from "./butom";
import { styled } from "styled-components";
export function Pokemon() {
  const { pokedata, srcImput} = useContext(pokeDataContext);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    const filterData = async () => {
      const filteredArray = pokedata
        .filter((data) =>
          data.types.some((type) =>
            type.type.name.toLowerCase().includes(srcImput.toLowerCase()) 
          ) ||
          data.name.toLowerCase().includes(srcImput.toLowerCase())
        )
        .map((data) => ({ ...data }));
  
      setFilteredData(filteredArray);
    };
  
    filterData();
    
  }, [pokedata, srcImput]);

  return (
    <Ul>
      {filteredData.map((pokemon, index,) => (
        <li key={index}>
          <Button to={`/pokedetails/${pokemon.id}`} label={
            <div>

              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <p>{pokemon.name}</p>
            </div>
          } />
        </li>
      ))}
    </Ul>
  );

}
const Ul = styled.ul`
display:flex;
flex-wrap: wrap;
justify-content: center;

`

