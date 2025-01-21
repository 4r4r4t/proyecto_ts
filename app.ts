type User = {
    name: String;
    age: number
}
function isAdult(user: User): boolean{
    return user.age >=18;
}
const santiago: User = {
    name: "Santiago",
    age: 20
}
const isAnAdult: boolean = isAdult(santiago);
console.log("Santiago es un Adulto?", isAnAdult);

