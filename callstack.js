"use strict";
function a() {
  console.log("1");
  b();
  console.log("2");
}

function b() {
  console.log("3");
  c();
  console.log("4");
  d();
  console.log("5");
}

function c() {
  console.log("6");
}

function d() {
  console.log("7");
  c();
  console.log("8");
}

console.log(a());
