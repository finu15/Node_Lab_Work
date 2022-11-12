for(i=1; i<=5; i++){
    for (j=1; j<=5-i; j++){
        process.stdout.write(" ")
    }
    for(k=1; k<=i; k++){
        process.stdout.write(" "+i)
    }
    console.log()
}