///////////////////////////////////////////////
/*logArguments
Вам необхідно написати функцію-декоратор logArguments(fn),
 яка приймає на вхід функцію і додає можливість логувати всі аргументи, 
 передані у функцію-аргумент.*/
///////////////////////////////////////
function work(a) {
  return `Name arguments ${a}`;
}

function logArguments(fn) {
  return function () {
    //console.log([].slice.call(arguments))
    log.push([].slice.call(arguments));
    //console.log(arguments)
    return fn.apply(arguments);
  };
}
const log = [];

work = logArguments(work);

console.log(work(1)); // Name arguments 1
console.log(work(6)); // Name arguments 6
console.log(work(7)); // Name arguments 7

log.forEach((element) => {
  console.log(`Лог:${element}`);
}); // Лог:1   Лог:6   Лог:7
///////////////////////////////////////////////
/*validate
Вам необхідно написати функцію-декоратор validate(fn, validator),
 яка приймає на вхід функцію і додає можливість перевіряти аргументи,
  передані у функцію fn, на відповідність заданому validator.
   Якщо аргументи не проходять перевірку, то декоратор має викидати виняток.*/
//////////////////////////////////////////////
const validate = function (fn, validator) {
  return function (...args) {
    const validArgs = args.filter((arg) => Number.isInteger(arg));
    if (validArgs.length < fn.length) {
      console.log("Argument cannot be a non-integer");
      return fn(validArgs, 1);
    }
    return fn(...args);
  };
};

let multiply = function (a, b) {
  return a * b;
};

multiply = validate(multiply);

console.log(multiply(6, 8)); //48

console.log(multiply(3, null)); // Argument cannot be a non-integer    // 3
///////////////////////////////////////////////////////////////////////////
/*retry
Вам необхідно написати функцію-декоратор retry(fn, maxAttempts),
 яка приймає на вхід функцію і додає можливість викликати функцію 
 з максимальною кількістю спроб у разі помилки та повертає результат останнього виклику.*/
 ///////////////////////////////////////////////////////////////////////////////////////



 
