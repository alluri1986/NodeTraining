const person  = 
{
    name: 'Max',
    age: 33,
    greet()
    {
        console.log('Hi I am '+ this.name + '. My age is '+ this.age)
    }
}

//Destructing of Objects
const printName = ({name,age}) =>
{
    console.log(name);
    console.log(age);
};
printName(person);
const {name, age} = person
console.log(name)
console.log(age)

//Destructing can also be used for arrays as well
const hobbies  = ['Swimming','Programming'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1,hobby2); 
