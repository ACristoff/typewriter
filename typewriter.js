const sentence = "hello there from lighthouse labs";


setTimeout(() => {
  // print the char here
  let timeOut = 50;
for (const char of sentence) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(char);
  }, timeOut) // <= 1s delay to make it noticeable. Can dial it down later.
  timeOut = timeOut + 50;
}
setTimeout(() => { 
  console.log('')

}, 10+timeOut)

}, 1000)

// <= 1s delay to make it noticeable. Can dial it down later.



