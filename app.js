function isAdult(user) {
    return user.age >= 18;
}
var santiago = {
    name: "Santiago",
    age: 20
};
var isAnAdult = isAdult(santiago);
console.log("Santiago es un Adulto?", isAnAdult);
