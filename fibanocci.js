let a = 0;
let b = 1;
process.stdout.write('' + a);
process.stdout.write(' ' + b);
for (i = 0; i < 20; i++) {
    c = a + b;
    process.stdout.write(' '+ c);
    a = b;
    b = c;
}