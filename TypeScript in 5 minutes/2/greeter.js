function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: 'Alvaro',
    lastName: 'Sacari'
};
document.body.textContent = greeter(user);
