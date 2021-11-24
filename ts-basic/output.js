var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var active = true;
var integer = 6;
var floating = 1.6;
var binary = 10;
var octal = 484;
var hex = 0x00f;
var myName = 'Joe';
var yourName = "Béla";
var greet = "Hello, my name is ".concat(myName);
function myTag(strings, personExp, ageExp) {
    var str0 = strings[0];
    var str1 = strings[1];
    var str2 = strings[2];
    var ageStr;
    if (ageExp > 99) {
        ageStr = 'too old';
    }
    else {
        ageStr = 'young';
    }
    return "".concat(str0).concat(personExp).concat(str1).concat(ageStr).concat(str2);
}
var person = 'Mike';
var age = 101;
var output = myTag(__makeTemplateObject(["That ", " is ", "."], ["That ", " is ", "."]), person, age);
//# sourceMappingURL=output.js.map