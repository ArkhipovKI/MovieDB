<script>
const expression = prompt('введите выражение');
function f(str) {
const ops = str.split(" ");
const num1 = ops[0], num2 = ops[2], action = ops[1];

const integerArg1 = parseInt(num1)
const integerArg2 = parseInt(num2)
if ((integerArg1>=1 && integerArg1<=10) && (integerArg2>=1 && integerArg2<=10) || (matches[num1]>=1 && matches[num1]<=10) && (matches[num2]>=1 && matches[num2]<=10))
{
if (Number.isInteger(integerArg1))
{
if(Number.isInteger(integerArg2))
{
return operations[action](integerArg1, integerArg2)
}
else
{
throw "error"
}
}
else {
return operations[action](matches[num1], matches[num2])
}
}
else {alert ('ошибка ввода')}
}
const matches = {
"I": 1,
"II": 2,
"III": 3,
"IV": 4,
"V": 5,
"VI": 6,
"VII": 7,
"VIII": 8,
"IX": 9,
"X": 10,
}
const operations = {
"+": function(num1, num2){
return parseFloat(num1)+parseFloat(num2);
},
"-": function(num1, num2){
return num1-num2;
},
"*": function(num1, num2){
return num1*num2;
},
"/": function(num1, num2){
return num1/num2;
}
};
alert(f(expression));
</script>