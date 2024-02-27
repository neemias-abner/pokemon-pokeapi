import { useState, useEffect } from "react";

export function PokeData() {
    const [pokeList, setPokeList] = useState([]);
    const [pokedata, setPokedata] = useState([]);
    const [amount, setAmount] = useState(10);
    const [srcImput, setSrcImput] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${amount}`);

                const data = await response.json();
                setPokeList(data.results);
            } catch (error) {
                console.error("Error fetching Pokémon data:", error);
            }
        };

        fetchData();
    }, [amount]);

    useEffect(() => {
        const fetchLinks = async () => {
            const promises = pokeList.map(async (pokemon) => {
                const response = await fetch(pokemon.url)
                const data = await response.json()


                return data;
            })
            const resolvedData = await Promise.all(promises);
            setPokedata(resolvedData);
        };

        if (pokeList.length > 0) {
            fetchLinks();
        }
    }, [pokeList]);

    return { pokedata, amount, setAmount, srcImput, setSrcImput };

}

