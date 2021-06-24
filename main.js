let Phrase = require("activefog-palindrome");

function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.content == "") {
    palindromeResult.innerHTML = (`<p>Need ideas? Try "<b>Dennis and Edna sinned.</b>"</p>`)
  } else if (phrase.palindrome()) {
    palindromeResult.innerHTML = (`<p>"<b>${phrase.content}</b>" is a palindrome!</p><h1>😎</h1>`);
  } else {
    palindromeResult.innerHTML = (`<p>"<b>${phrase.content}</b>" is not a palindrome.</p><h1>😑</h1>`)
  }
}

let button = document.querySelector("#palindromeTester");
button.addEventListener("submit", function() {
  palindromeTester(event);
})
