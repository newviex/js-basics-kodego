import U, {printName as printUserName, printAge} from '../es6/es6user.js';

const user = new U('Rod', 40);
console.log(user);

printUserName(user);
printAge(user);