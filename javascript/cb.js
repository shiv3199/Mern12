//sandwich making 
function berad(bread,cb){
    console.log(bread)
    cb()

}
function vegetable(cb){
    console.log('vegetable chopped');
    cb()
}
function cream(cb){
    console.log('cream spread')
    cb()
}
function binding (cb){
    console.log('bind the sandwich')
    cb()
}
function grill(cb){
    console.log('Sandwich griller')
    cb()
}

berad('bread',()=>{
    vegetable(()=>{
        cream(()=>{
            binding(()=>{
                grill(()=>{
                    console.log('served')
                })
            })
        })
    })
})