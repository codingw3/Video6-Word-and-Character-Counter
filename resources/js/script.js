const textInput = document.getElementById("text-input");
const count = document.getElementById("count");
const countLabel = document.getElementById("count-label");
const countWordsRadio = document.getElementById("count-words");
const countCharsRadio = document.getElementById("count-chars");
const btnClear = document.getElementById("btn-clear");

function updateCount() {
  const text = textInput.value;
  const countType = countWordsRadio.checked ? "words" : "chars";

  if (countType === "words") {
    const words = text.match(/\b\w+\b/g) || [];
    count.textContent = words.length;
    countLabel.textContent = words.length === 1 ? "word" : "words";
  } else {
    count.textContent = text.length;
    countLabel.textContent = "characters";
  }
}

textInput.addEventListener("input", updateCount);

countWordsRadio.addEventListener("change", updateCount);
countCharsRadio.addEventListener("change", updateCount);

updateCount();

btnClear.addEventListener("click", function () {
  count.textContent = 0;
  textInput.value = "";
  textInput.focus();
});
