var pets = ['cat', 'dog', 'rat'];
var length = pets.length;
for (var i = 0; i < length; i++) {
    pets[i] = pets[i] + 's';
}
console.log(pets);