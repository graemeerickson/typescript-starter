let num:number = 100;
let myStr:string = 'Hello world!';
const myArr:number[] = [1, 2, 3];
const anyArr:any[] = [1, 2, 3, 'test string', true];
enum myConstantsEnum {
  pi = 3.14,
  e = 2.73,
  log2 = 0.3,
  log5 = 0.7
}
const radius:number = 10;
console.log('Finding circumference of circle');
console.log(2 * myConstantsEnum.pi * radius);