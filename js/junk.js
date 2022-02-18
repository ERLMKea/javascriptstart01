const out = (...str) => console.log(...str);

let a = 5;
a = 5.5;
a = "hej";
a = 3>4;

let b;

out(4 + (4>2));
out((4>2) + 5);
out("4" + 4);
out(4 + "5");
out((4>5) + "6");



out(" hej jeg er en string erik's string");
out(' jeg er en "enkel" pling string ');

out(a+b);
