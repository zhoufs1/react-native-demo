module Validation {
    const numberRegexp = /^[0-9]+$/;

    export class ZipCodeValidator implements StringValidation {
        isAcceptable(s: string): boolean {
            return numberRegexp.test(s);
        }
    }
}