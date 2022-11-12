let n = 20;
let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = n; j >= 1; j--) {
        if (i >= j) {
            if (i % 2 != 0) {
                process.stdout.write("*")
            }
        }
        else {
            process.stdout.write(" ")
        }
    }
    console.log("")
}



