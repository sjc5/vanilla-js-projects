let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function() {
      let mixedPalindrome = new Phrase("Racecar");
      assert(mixedPalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

    it("should return true for all numbers palindrome", function() {
      let numberPalindrome = new Phrase("12321");
      assert(numberPalindrome.palindrome());
    });

    it("should return false for all numbers non-palindrome", function() {
      let numberNonPalindrome = new Phrase("1232");
      assert(!numberNonPalindrome.palindrome());
    });
  });

  describe("#letters", function() {
    it("should return only letters", function () {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });
  });
});
