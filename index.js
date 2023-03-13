// Write your code in this file!
const currentUser = "Grace Hopper";
let welcomeMessage = "Welcome to Flatbook, ";
welcomeMessage = `Welcome to Flatbook, ${currentUser} !`;

let excitedWelcomeMessage = "WELCOME TO FLATBOOK, ";

const upperCaseCurrentUser = currentUser.toUpperCase();

excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${upperCaseCurrentUser} !`;

let shortGreeting = "Welcome, ";

const firstInitial = currentUser[0];

shortGreeting = `Welcome, ${firstInitial} !`;

console.log(shortGreeting);
