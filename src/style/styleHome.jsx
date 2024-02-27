
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

const HomeCard = styled.div`
margin:1vw  ;
padding: 1vw;
border-radius: 15px;
border: 1px solid transparent;
min-width: 80%;
min-height: 50vh;
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content:center;
color:${({theme})=>(theme.color)};
background:${({ theme }) => (theme.cardColor)};
`

export{
    Main,
    HomeCard,
}
