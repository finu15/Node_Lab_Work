var r = require('readline-sync')
var User1 = 0
var User2 = 0
while (true) {
    var n = r.question('Press a for User1 and b for User2 :')
    if (n == 'a') {
        var d = Math.floor(Math.random() * 6)
        d = d + 1
        User1 = User1 + d
        if (User1 < 6) {
            User1 = 0
        }
        else if (User1 == 9 || User1 == 15 || User1 == 20 || User1 == 35 || User1 == 45 || User1 == 55 || User1 == 63 || User1 == 70 || User1 == 76) {
            User1 = User1 + 20
        }
        else if (User1 == 96 || User1 == 89 || User1 == 84 || User1 == 79 || User1 == 68 || User1 == 52 || User1 == 49 || User1 == 31 || User1 == 24 || User1 == 17) {
            User1 = User1 - 20
        }
        else if (User1 > 100) {
            User1 = User1 - d
        }
        else { }
        console.log('User1 :' + User1);
    }
    if (n == 'b') {
        var d = Math.floor(Math.random() * 6)
        d = d + 1
        User2 = User2 + d
        if (User2 < 6) {
            User2 = 0
        }
        else if (User2 == 9 || User2 == 15 || User2 == 20 || User2 == 35 || User2 == 45 || User2 == 55 || User2 == 63 || User2 == 70 || User2 == 76) {
            User2 = User2 + 20
        }
        else if (User1 == 96 || User1 == 89 || User1 == 84 || User1 == 79 || User1 == 68 || User1 == 52 || User1 == 49 || User1 == 31 || User1 == 24 || User1 == 17) {
            User2 = User2 - 20
        }

        else if (User2 > 100) {
            User2 = User2 - d
        }
        else { }
        console.log('User2 :' + User2);

    }
    if (User1 == 100) {
        console.log('User1 wins');
        break
    }
    else if (User2 == 100) {
        console.log('User2 wins');
        break

    }


}