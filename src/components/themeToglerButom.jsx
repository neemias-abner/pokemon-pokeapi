import { useContext } from "react"
import { ThemeContext, themes} from "../context/themeContext"
import { Button } from "./butom"
import styled from "styled-components"
export const ThemeTogglerButom = () => {
    const togglerImage = ("https://cdn-icons-png.flaticon.com/512/5262/5262027.png")
    const { theme , setTheme } = useContext(ThemeContext)
    
    return (
        <Div>
            <Button onClick={()=> setTheme (theme === themes.light ? themes.dark : themes.light)} label={<Img src={togglerImage}/>}/>
        </Div>
    )
}
const Div = styled.div`

display:flex;
justify-content: end;
width: 100%;

`

const Img = styled.img`
width:40px;
height:40px;
`