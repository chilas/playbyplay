"use strict";
function StringToUpper(word) {
    if (typeof word !== "string")
        throw new Error("Can not convert non-string values");
    var upperString = null;
    for (var i = 0; i < word.length; i++) {
        var charCode = void 0;
        var currentCharCode = word.charCodeAt(i);
        if ((currentCharCode < 65) ||
            (currentCharCode > 122) ||
            (currentCharCode >= 65 && currentCharCode <= 96)) {
            charCode = word.charCodeAt(i);
        }
        else {
            charCode = 65 + (word.charCodeAt(i) - 97);
        }
        upperString += String.fromCharCode(charCode);
    }
    return upperString;
}
exports.StringToUpper = StringToUpper;
