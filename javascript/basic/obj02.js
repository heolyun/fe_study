
let scores = [10, 20, 30, 50];

console.log(scores);

for(let i=0; i<scores.length; i++){
    console.log(scores[i]);
}

// for in
for(let i in scores){
    console.log(i + " " + scores[i]);
}

// for of
for(let value of scores){
    console.log(value);
}

scores.forEach( (item, index)=> {
    console.log(item + " " + index);
});