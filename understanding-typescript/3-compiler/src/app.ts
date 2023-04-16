"use strict";
const userName = "Nawazish alam";
console.log(userName);
let a = "ab";
const b = "b";

const button = document.querySelector("button");
button?.addEventListener("click", () => {
  console.log("button click..");
});

// for automatically checking the changes
// tsc app.ts --watch
// for automatically checking the changes in enitre file we need to tsc --init
// tsc --watch /tsc -w
