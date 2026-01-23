// function fetchData (url){
//     fetch(url)
//         .then((res)=>res.json)
//         .then((data)=>{
//             console.log(data)
//         })
//         .catch((err)=>{
//             console.error("this is error")

//         })
// }

async function fetchData1(url) {
    try{
        const response= await fetch(url);
        if(!response.ok){
            console.log("something went wrong")
        }
        const data = await response.json()
        comsole.log(data)
    }
    catch(err){
        console.log(err)
    }
}