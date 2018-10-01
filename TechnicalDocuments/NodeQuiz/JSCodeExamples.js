function addValues(x, y) {
    console.log(x + y);
    return x + y;
}

a = 12;
b = 7;
console.log(a == 8 || b == 7); //Logs true
console.log(a == 8 && b == 7); //Logs false
console.log(a == 12 && b == 7); //Logs true
console.log(!(a == 12 && b == 7)); //Logs false

c = 100;
if (c - 100 == 0) {
    console.log('Made it!');
}

//Made it!

d = 1300;
while (!(d % 237) == 0) {
    d++;
}
console.log(d);

// Finds the next number (after 1300)
// divisible by 237

z = 0;
for (x = 26; !(x % 6 == 0); ++x) {
    console.log(x);
}
// Lists numbers which do not divide evenly by 6 between
// 26 and the next divisible number
