function camelize(str) {
    const words = str.split('-');
    const camelizedWords = words.map((word, index) => {
        if (index===0){
            return word.toLowerCase();
        } 
            return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
    });
    return camelizedWords.join("");
}

console.log(camelize(prompt("Please enter a phrase with dashes and no spaces")));