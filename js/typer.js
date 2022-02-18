// der er 7 (3+2+2) primitive typer i JavaScript
// Number String Boolean
// Undefined Null
// Symbol og BigInt .. dem bruger vi ikke

// der er yderligere 2 typer
// object og function

const out = (...str) => console.log(...str);

out("hej ", "Typer");

function showTypes(lst) {
  out("STARTER udskrivning");
  for (const obj of lst) {
    out(obj + " er af typen=" + typeof obj);
  }
}

let b;
let d = null;
let n2 = 0;
const arr = [b, d, 5/n2, 5/b, 1, 1.2, "hej", [1,2,"3"], {"key": "value", "navn":"lene"}, 3>4, out];
showTypes(arr);
//arr.forEach(showTypes);




