Credentials={
    Username: "Admin",
    Password: "Admin123"
}
console.log(Credentials.Username)
console.log(Credentials.Password)

Userdetails={
Firstname: "jammula",
lastname: "jagadeesh",
Age:25,
gender: "male",
adress:{
    street:"34th street",
    pincode:530036
}}

Userdetails.adress['street']="34th street"
Userdetails[gender]="female"
delete Userdetails.firstname
console.log(Userdetails.firstname) //it will be execute but showing undefined
console.log(Userdetails.course) // it will be execute but  showing undefined 
Userdetails.adress['city']= "hyderabad" // add new property and value
console.log(Userdetails['lastname'])
console.log(Userdetails.adress.street)
console.log(Userdetails.adress.pincode)
Userdetails['adress']="xyz" // it will be override the adress object to string

// ordernumber generated
// Obj{
//     ordernumber:""
// }
// test{
//     genarate ordernumber 
// }
// tset{
//     await page.locator(xpath).fill(obj.ordernumber)
// }

jobtitles={
title1:"sdtm",
title2:"sas",
title3:"sql"
}
for(let values in jobtitles){  // for in is the advance properties  
console.log(jobtitles[values])
}