const timer = time => {
  setTimeout(() => {
    process.stdout.write("working...");
  }, time);
};

const array = process.argv.slice(2);
const arrayNumbers = array.map(element => parseInt(element));


for (const elements of arrayNumbers) {
  if (typeof elements === "number" && elements >= 0) {
    timer(elements * 1000);
  }
}


