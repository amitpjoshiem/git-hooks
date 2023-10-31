import { foo } from "./Test";
import React from "react";
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
var age = 20;
function hello(age) {
  return foo + "hello" + age;
}
hello(age);
