const out = (...str) => console.log(...str);

out("hej ", "erik", "vi er igang");

const a = 5;
//det kan man ikke a = 6;

let b = 5;
b = 6;
b = "hej";

var c = 7;
c = (7.7 / 3) > 4;

function testlet(parm1) {
  let a1 = "xjeg er lokal";
  var v1 = "jeg er var lokal";
  //out("a3 =" + a3);
  out("v3 =" + v3);
  if (a1 > v1) {
    out("a1 > v1");
    let a2 = "a1 var sjovt nok større end v1";
    var v2 = "v1 var mindre end";
    if (3 == 3) {
      out("3 == 3");
      let a3 = "heja3";
      var v3 = "hejv3";
    }
  }
}

testlet("haje");
out("v3 end =" + v3)


