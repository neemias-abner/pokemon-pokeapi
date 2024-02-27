import { Link, useParams } from "react-router-dom";
import pokeDataContext from "../context/pokeDataContext";
import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "../context/themeContext";
import { Main, Card, BasicDetails, MovesAndAbilities, PokemonName, Type, typeColours } from "../style/stylePokedetails"
export default function PokeDetail() {
    const { id } = useParams()
    const { pokedata } = useContext(pokeDataContext);
    const { theme } = useContext(ThemeContext)
    const selectPokemon = pokedata.find(pokemon => pokemon.id === Number(id));
    const [abilitiesData, setAbilitiesData] = useState([]);
    const [typesData, setTypesData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const abilitiesWithDetails = await Promise.all(
                selectPokemon.abilities.map(async (ability) => {
                    const response = await fetch(ability.ability.url);
                    const data = await response.json();
                    return {
                        ...ability,
                        details: data,
                    };
                })
            );
            setAbilitiesData(abilitiesWithDetails);
        };
        fetchData();
    }, [selectPokemon.abilities]);
    useEffect(() => {
        const fetchData = async () => {
            const typeData = await Promise.all(
                selectPokemon.types.map(async (types) => {
                    const data = await types.type.name
                    return { name: data, }
                })
            );
            setTypesData(typeData)
        }
        fetchData()
    }, [selectPokemon])
    return (
        <Link to={"/"}>
            <Main theme={theme}>
                <Card theme={theme}>
                    <BasicDetails>
                        <div>
                            <img src={selectPokemon.sprites.front_default} alt={selectPokemon.name} />
                            <PokemonName>{selectPokemon.name.toUpperCase()}</PokemonName>
                        </div>
                        <ul>
                            {typesData.map((type, index) => (
                                <li key={index}>
                                    <Type theme={theme} color={typeColours[type.name.toLowerCase()]}>{type.name}</Type>
                                </li>
                            ))}
                        </ul>
                    </BasicDetails>
                    <MovesAndAbilities theme={theme}>
                        <ul>
                            <li><h4>Moves</h4></li>
                            {selectPokemon.moves.map((move, index) => (
                                <li key={index}>{move.move.name}</li>
                            ))}
                        </ul>
                        <ul>
                            <li><h4>Abilities</h4></li>
                            {abilitiesData.map((ability, index) => (
                                <li key={index}>
                                    <h4>{ability.ability.name}</h4>
                                    {ability.details.effect_entries.map((details, index) => (
                                        <p key={index}>effect: {details.effect}  <br />short effect: {details.short_effect}</p>
                                    )
                                    )}
                                </li>
                            ))}
                        </ul>
                    </MovesAndAbilities>
                </Card>
            </Main>
        </Link>
    )
}