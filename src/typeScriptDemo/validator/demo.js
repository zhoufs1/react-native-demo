var strings = ['Hello', '9812', '113'];
var validators = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LetterValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
    console.log(1);
});
