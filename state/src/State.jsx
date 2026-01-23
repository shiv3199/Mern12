const State = ({name,setName})=>{
    const handelChange = (e)=>{
    setName(e.target.value)
    }
    return (
        <>
        {/* <h1>Name:{fName}</h1>
        <h2>Age:{fAge}</h2> */}
        <input type="text" placeholder="enter name" onChange={handelChange} />
        </>
    )
}
export default State