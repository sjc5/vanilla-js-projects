let Phrase = require("activefog-palindrome");

let string = prompt("Please enter a string for palindrome testing:");

alert(new Phrase(string).palindrome());
