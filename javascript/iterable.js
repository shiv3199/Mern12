let obj1 = {
    fname:'shivam',
    age:26,
    address:{
        city:'jalandhar',
        state:'punjab'
    }
}
//spread operator shallow copy
let obj2 = {...obj1}
console.log(obj1)
obj2.fname='shiv'
console.log(obj2)

//shallow copy only copy fist layer of object
let obj3 = structuredClone(obj1)
obj3.address.city='ldh'
console.log(obj1)
console.log(obj3)
/// leagacy method
///json.parse(json.stringify(obj1))

//rest

let arr =[1,2,3,4,5]
let [a,b,...rest] = arr
console.log(a)
console.log(rest)





//rest args

function sum (...args){
    let sum =0;
    for(let i = 0; i<args.length; i++){
        sum += args[i]
    }
    return sum
}
let res = sum(12,5,4,5,3,4)
console.log(res)




//currying


function mail (to){
    return function(sub){
        return function(body){
            console.log(`${to} order ${sub} body ${body}`)
        }
    }
}
mail('shiva')('order')('now')


//callback