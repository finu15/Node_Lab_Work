var str = "GOOD MORNING";
for (i = str.length - 1; i >= 0; i--) {
    var rev = str[i];
    process.stdout.write('' + rev)
}