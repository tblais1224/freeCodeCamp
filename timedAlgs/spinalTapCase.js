//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  let spinal = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === "_" || str[i] === "-") {
      spinal += "-";
    } else if (str[i] === str[i].toUpperCase() && i !== 0 && spinal[spinal.length - 1] !== '-') {
      spinal += "-" + str[i];
    } else {
      spinal += str[i];
    }
  }
  console.log(spinal.toLowerCase());
  return spinal.toLowerCase();
}

spinalCase("This Is Spinal Tap");

//finished in 12 min