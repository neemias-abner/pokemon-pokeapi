import { useContext } from "react"
import { Button } from "./butom"
import pokeDataContext from "../context/pokeDataContext"

export const LoadMore = ()=>{
const {amount, setAmount} = useContext(pokeDataContext)

return(
    <div style={{display:"flex",justifyContent:"center",}}>
        <Button onClick={()=> setAmount( amount+10)} label={<p>load more</p>} />
    </div>
)
}