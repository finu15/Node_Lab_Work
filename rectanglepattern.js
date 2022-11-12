let w = 5;
let h = 10;
let string = "";
for (i = 0; i < w; i++) {
    for (j = 0; j < h; j++) {
        if (i == 0 || i == w - 1) {
            string += "* "
        }
        else {
            if (j == 0 || j == h - 1) {
                string += "* ";
            }
            else {
                string += "  ";
            }
        }
    }
    string += "\n";
}
console.log(string);