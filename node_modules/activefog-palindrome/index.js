module.exports = Phrase;


// Adds 'reverse' to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns the letters in the content
  this.letters = function letters() {
    const regex = /[a-z0-9]/gi;
    return (this.content.match(regex) || []).join("");
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

String.prototype.palindrome = function palindrome() {
  return new Phrase(this).palindrome();
}
