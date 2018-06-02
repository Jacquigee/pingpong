
function myFunction(i,output) {
  for (var i = 1; i <= num; i++) {
    event.preventDefault();

  if (i % 3 === 0) && (i % 5 ===0) {
    output.push("PingPong");
  }
  else if (i % 3 === 0){
    output.push("Ping");
  }
  else if (i % 5 === 0) {
    output.push("Pong");
  }
  else {
    output.push(i);
  }

  return output;
}
}
