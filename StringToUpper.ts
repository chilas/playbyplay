export function StringToUpper(word: string): string {
    if (typeof word !== "string")
        throw new Error("Can not convert non-string values");

    let upperString: string = "";

    for (let i = 0; i < word.length; i++) {
        let charCode: number;
        let currentCharCode = word.charCodeAt(i);

        if (
            (currentCharCode < 65) ||
            (currentCharCode > 122) ||
            (currentCharCode >= 65 && currentCharCode <= 96)
        ) {
            charCode = word.charCodeAt(i);
        }
        else {
            charCode = 65 + (word.charCodeAt(i) - 97)
        }

        upperString += String.fromCharCode(charCode);
    }
    return upperString;
}