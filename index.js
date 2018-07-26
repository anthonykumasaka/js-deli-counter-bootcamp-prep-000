var katzDeli = []
function takeANumber(katzDeliLine, newPersonsName) {
      katzDeliLine.push(newPersonsName)
      return "Welcome, " + newPersonsName + ". You are number " + katzDeliLine.length + " in line."; 
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0 ) {
    return "There is nobody waiting to be served!"
  } else {
    var servingCustomer = katzDeliLine[0]
    katzDeliLine.shift();
    return "Currently serving " + servingCustomer + "."; 
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
} else { for (var i = 0; i < katzDeliLine.length; i++) {
  var current = current + (i + 1) + ". " + katzDeliLine[i]
}
  return current; 
}
}