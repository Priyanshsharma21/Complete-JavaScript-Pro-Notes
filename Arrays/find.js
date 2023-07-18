// loop over array and returns the first value that satisfy the condition.



const states = ['MP', 'UP', 'Delhi', "Maharastra"]


const state = states.find((state)=>{
    if(state.slice(0,1)==='D'){
        return state
    }
})

console.log(state)