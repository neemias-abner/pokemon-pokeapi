
import { Pokemon } from "../components/pokemon";
import React, { useContext } from "react";
import { ThemeTogglerButom } from "../components/themeToglerButom";
import { ThemeContext } from "../context/themeContext";
import { SrcPokemon } from "../components/srcPokemon";
import { LoadMore } from "../components/loadMore";
import { Main, HomeCard} from "../style/styleHome";
export default function Home() {
  const { theme } = useContext(ThemeContext)
  return (
    <>
      <Main style={{ backgroundColor: theme.mainColor, }}>
        <HomeCard theme={theme}>
          <div>
            <SrcPokemon/>
            <ThemeTogglerButom />
          </div>
          <Pokemon />
            <LoadMore/>
        </HomeCard>
      </Main>
    </>
  )
}