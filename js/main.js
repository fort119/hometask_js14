const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

function generateKey(amount, from) {
  let randomIndx = "";
  let randomChrctr = "";

  for (i = 0; i < amount; i++) {
    randomIndx = Math.floor(Math.random() * from.length);
    randomChrctr += from[randomIndx];
  }

  return randomChrctr;
}

let key = generateKey(11, characters);
console.log(key);