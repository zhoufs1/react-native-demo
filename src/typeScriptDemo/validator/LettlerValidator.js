var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var LetterValidator = /** @class */ (function () {
        function LetterValidator() {
        }
        LetterValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LetterValidator;
    }());
    Validation.LetterValidator = LetterValidator;
})(Validation || (Validation = {}));
