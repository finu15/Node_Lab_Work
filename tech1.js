const fs = require('fs');

var finu = {
    fullName: 'Finu Fathima N',
    age: 22,
    phone: [12345, 67890]
}

var string = JSON.stringify(finu);

// fs.writeFileSync("data.json", string)
// console.log("File Saved Successfully.")

fs.writeFile("data-async.json", string, ()=>{
    console.log("ASYNC File Saved Successfully.")
});
console.log("COMPLETED")


// write a file to a json file