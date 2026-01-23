import { useState, useEffect } from "react"

const Effect = ()=>{
    const [count,SetCount] = useState(0)

    useEffect(()=>{
        if(count<1){

            console.log("hi")
        }
        return ()=>{
            console.log("end")
        }

    },[count])

    const handelClick = ()=>{
        SetCount(count+1)
    }
    return (
        <>
        <p>{count}</p>
        <button onClick={handelClick}>Count</button>
        </>
    )
}
export default Effect