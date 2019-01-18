let num = 100;
let myStr = 'Hello world!';
const myArr = [1, 2, 3];
const anyArr = [1, 2, 3, 'test string', true];
var myConstantsEnum;
(function (myConstantsEnum) {
    myConstantsEnum[myConstantsEnum["pi"] = 3.14] = "pi";
    myConstantsEnum[myConstantsEnum["e"] = 2.73] = "e";
    myConstantsEnum[myConstantsEnum["log2"] = 0.3] = "log2";
    myConstantsEnum[myConstantsEnum["log5"] = 0.7] = "log5";
})(myConstantsEnum || (myConstantsEnum = {}));
const radius = 10;
console.log('Finding circumference of circle');
console.log(2 * myConstantsEnum.pi * radius);
