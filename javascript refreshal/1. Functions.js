    
// Different Ways of Writing a Java Script Function

var name = 'max';
var age = 12;
var hasHobbies  = true;

function summarizeUser(userName,userAge,userHasHobbies)
{
    return ('Name is ' + userName + '. age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies);
}

const summarizeUser1  = function(userName,userAge,userHasHobbies)
{
    return ('Name is ' + userName + '. age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies);
}

const summarizeUser2  = (userName,userAge,userHasHobbies) =>
{
    return ('Name is ' + userName + '. age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies);
}

const summarizeUser3  = (userName,userAge,userHasHobbies) =>'Name is ' + userName + '. age is ' + userAge + ' and the user has hobbies: ' + userHasHobbies;


console.log(summarizeUser1(name,age,hasHobbies));

console.log(summarizeUser(name,age,hasHobbies));