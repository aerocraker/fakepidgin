function fakepidgin(str){
  let temp = [];
  for (let i = 0; i < str.length; i++){
    temp[i] = "Eh brah, " + str[i];
  }
  return temp;
}



console.log(fakepidgin(['would you like to eat?', 'no thank you.']));