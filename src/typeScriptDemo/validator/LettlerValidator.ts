module Validation {
    const lettersRegexp = /^[A-Za-z]+$/;

    export class LetterValidator implements StringValidation {
        isAcceptable(s: string): boolean {
            return lettersRegexp.test(s);
        }
    }
}