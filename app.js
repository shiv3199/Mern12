// let a =["a","b","c"]
// for(i=0; i<a.length; i++){
//     console.log(a[i]+i)
// }

//reverse string

function reverse(a){
    let str = ""
    for(let i=a.length-1; i>=0; i--){
        str+=a[i]
    }
    console.log(str)
}
reverse ("rajit")

let colors = ['red','black','green']
for(color of colors){
    console.log(color)
}