function toCamelCase(str){
    let str_split = str.split('');
    for (let i = 0; i < str_split.length - 1; i++) {
        if (str_split[i] === '-') {
            str_split.splice(i, 2, str_split[i+1].toUpperCase());
        }

        if (str_split[i] === '_') {
            str_split.splice(i, 2,  str_split[i+1].toUpperCase());
            str_split[0].toUpperCase();
        }

    }
    str = str_split.join('');
    return str;
}

console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The_Stealth_Warrior"));
console.log(toCamelCase("A-B-C"));
