function greeter(person: string) {
  return `Hello, ${person}`;
}

let user: string = "Alvaro Sacari";

document.body.textContent = greeter(user);
