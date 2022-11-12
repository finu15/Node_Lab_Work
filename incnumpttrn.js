for (i = 1; i < 6; i++) {
    for (j = 1; j <= i; j++) {
        process.stdout.write(j+' ');
    }
    process.stdout.write("\n");
}