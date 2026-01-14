let salary = [1000,2000,3000]

function tenpercent (salary){
return salary *0.1
}
function twentyPercent (salary){
return salary*0.2
}

function calculateTax(salary,cb){
    let res =[]
    for(i=0; i<salary.length; i++){
        // res.push(salary[i](cd))
        res.push(cb(salary[i]))

    }
    return res

}
console.log(calculateTax(salary,tenpercent))


//array prototype higher oerder function

Array.prototype.calculateTax = function(cb){
    let res =[];
    for (let i=0; i<this.length; i++){
        res.push(cb(this[i]))
    }
    return res
}

let done =salary.calculateTax(tenpercent)
console.log(done)