let k=1;
let n = 10;
let string = "";

for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= i; j++) {
    string += k;
    string += " ";
   
  
  }
    k=k+2;
   string += "\n";
}
console.log(string);


// to print it in one line we can also use ---- 

//process.stdout.write("one");
//process.stdout.write("two");
//process.stdout.write("three");