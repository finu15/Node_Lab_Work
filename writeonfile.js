const fs = require('fs');
fs.writeFileSync('myfirst2.txt','Finu');
fs.appendFileSync('myfirst2.txt',' Fathima');
console.log(fs.readFileSync('myfirst2.txt','utf-8'));