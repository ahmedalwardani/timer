// const timer = time => {
//   setTimeout(() => {
//     process.stdout.write("working...\n");
//   }, time);
// };

// const array = process.argv.slice(2);
// const arrayNumbers = array.map(element => parseInt(element));


// for (const elements of arrayNumbers) {
//   if (typeof elements === "number" && elements >= 0) {
//     timer(elements * 1000);
//   }
// }


const beep = function() {
  process.stdout.write("\x07");
  console.log("beeep");
};

// delay is expected in seconds
const scheduleBeep = function(delay) {
  // if (delay < 0 || isNaN(delay)) {
  //   return;
  // }

  delay = Number(delay);

  // setTimeout(beep, delay * 1000);

  if (!isNaN(delay) && delay >= 0) {
    setTimeout(beep, delay * 1000);
  }
};

const numbers = process.argv.slice(2);
for (const num of numbers) {
  scheduleBeep(num);
}

