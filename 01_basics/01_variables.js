const accountId = 144553
let accountEmail = "Anshumandwivedi847@gmail.com" 
var accountPassword = "12345"
accountCity = "Berlin"
let accountState;

// accountId = 2 // not allowed 



accountEmail = "hc@gmail.com"
accountPassword = "9876"
accountCity = "new"


// Prefer not to use var because of issue in block scope and functional scope what is block scope nothing it is only {} brackets 

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])