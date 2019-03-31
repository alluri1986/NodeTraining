const hobbies = ['Cooking','Cricket']

for(let hobbie of hobbies) 
{ 
    console.log(hobbie)
}

console.log(hobbies.map((hobbie) => {
return 'Hobby: '+hobbie;
}))

// To Copy an Array   
copiedArray = hobbies.slice();
copiedArray1  = [hobbies]

//Spread Operator
copiedArray4  = [...hobbies]

console.log(copiedArray1)
console.log(hobbies)

// Add Item to existing Array
hobbies.push('Programming')
console.log(hobbies)

//Rest Operator
const toArray = (...args) =>
{
    return args
}
console.log(toArray(1,2,3,4))