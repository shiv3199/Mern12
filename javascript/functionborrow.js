let obj1 = {
    fname:'shivam',
    age:26,
    print: function (city){
        console.log(this.fname, this.age, this.city)
    }
}

// obj1.print()
let obj2 = {
    fname:'shivam1',
    age:25
}
obj1.print.call(obj2,'Jalandhar')
obj1.print.apply(obj2)
obj1.print.bind(obj2)();