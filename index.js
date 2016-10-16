"use strict";
var StringToUpper_1 = require('./StringToUpper');
/**
 * StringToUpper test
 */
var sentence = "I am Chilas!!!";
var word = "@iamchilas";
var char = "/";
var number = "08055472282";
var sentenceToUpper = StringToUpper_1.StringToUpper(sentence);
var wordToUpper = StringToUpper_1.StringToUpper(word);
var charToUpper = StringToUpper_1.StringToUpper(char);
var numberToUpper = StringToUpper_1.StringToUpper(number);
console.log("Sentence: ", sentenceToUpper);
console.log("Word: " + wordToUpper);
console.log("Char: " + charToUpper);
console.log("Number: " + numberToUpper);
