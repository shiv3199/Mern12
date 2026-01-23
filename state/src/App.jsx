import { useState } from "react"
import State from "./State"
import Effect from "./Effect"
const App = ()=>{
  const [name, setName] = useState('')
return (
  <>
  {/* <Card fName="shivam" fAge="26"/> normal props passing */}
  {/* <State name={name} setName={setName}/>
  <p>{name}</p> */}
  <Effect/>
  </>
)
}
export default App