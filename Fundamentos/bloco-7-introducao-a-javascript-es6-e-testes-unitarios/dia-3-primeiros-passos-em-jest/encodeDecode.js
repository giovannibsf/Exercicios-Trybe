function encode(a) {
    let array = a.split("")
    for (i = 0; i < array.length; i += 1) {
      if (array[i] == "a") {
        array[i] = 1
      } else if (array[i] == "e") {
        array[i] = 2;
      } else if (array[i] == "i") {
        array[i] = 3;
      } else if(array[i] == "o") {
        array[i] = 4;
      } else if(array[i] == "u") {
        array[i] = 5
      }
    }
    return array.join("")
  }
  function decode(b) {
    let array = b.split("")
    for (i = 0; i < array.length; i += 1) {
      if (array[i] == 1) {
        array[i] = "a"
      } else if (array[i] == 2) {
        array[i] = "e";
      } else if (array[i] == 3) {
        array[i] = "i";
      } else if(array[i] == 4) {
        array[i] = "o";
      } else if(array[i] == 5) {
        array[i] = "u"
      }
    } return array.join("")
  
  } 

  module.exports = {
      encode,
      decode
  }