import { SendText } from "./socket";

const textField = document.getElementById('editor-texto');

function UpdateText(newtext) {
  textField.value = text
}

textField.addEventListener("keyup", () => {
  console.log(textField.value)
  SendText(textField.value)
})

