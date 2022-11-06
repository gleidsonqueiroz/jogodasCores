const vetorCores = new Array ("AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige",
"Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood",
"CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk",
"Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey",
"DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange",
"DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue",
"DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet",
"DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue",
"FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro",
"GhostWhite","Gold","GoldenRod","Gray","Green","GreenYellow",
"HoneyDew","HotPink","IndianRed ","Indigo  ","Ivory","Khaki","Lavender",
"LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral",
"LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen",
"LightPink","LightSalmon" ,"LightSeaGreen","LightSkyBlue","LightSlateGray",
"LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen",
"Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid",
"MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen",
"MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose",
"Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange",
"OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise",
"PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue",
"Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon",
"SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue",
"SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal",
"Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow",
"YellowGreen")

function randomColores() {
    let cor = vetorCores[Math.floor(Math.random() * vetorCores.length)];
    return cor;
}
let randomCores = []
for (let i = 0; i < 10; i++) {
  let cor = randomColores();
  randomCores.push(cor);
  for (let j = 0; j < randomCores.length; j++) {
    if (randomCores[i]===randomCores[j]) {
      randomCores.pop();
      randomCores.push(randomColores());
    }
  }
}
randomCores.sort();
console.log(randomCores)
function test(winner) {
  if (randomCores.includes(winner)){
      return true;
  }
  return false;
}

function comecarJogo(){
  let cor_escolhidas = randomCores[Math.floor(Math.random() * randomCores.length)];
  while (true){

    let escolha = prompt("Tente Adivinhar qual é a Cor que estou pensando agora!\n\n\nFavor escolher uma cor abaixo:\n\n" +
    "1- "+randomCores[0]+";\n2- "+randomCores[1]+";\n3- "+ randomCores[2]+";\n4- "+randomCores[3]+";\n5- "+randomCores[4]+";\n6- "+randomCores[5]+";\n7- "+
    randomCores[6]+";\n8- "+randomCores[7]+";\n9- "+ randomCores[8]+";\n10- "+randomCores[9]+".\n\n");
 

    if (cor_escolhidas === escolha) {
      alert("\n\n        # #  P A R A B É N S !  !  !  # # \n\n        ACERTOU!\n\n");
      
      return true;
  }
    if (!test(escolha)){
      alert( "Escolha uma cor válida!\n.\n\nSua escolha foi "+escolha+"\n\nTente novamente.");
  } else if (escolha > cor_escolhidas) {
    alert("A cor que eu escolhi é Menor Alfabeticamente.\n\nSua escolha foi: "+escolha+"\n\nTente novamente.");
  } else if (escolha < cor_escolhidas){
    alert("A cor que eu escolhi é Maior Alfabeticamente.\n\nSua escolha foi: "+escolha+"\n\nTente novamente.");
    
  }  
  }
}

