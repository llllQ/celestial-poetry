const createSubmit = () => {
  const poemText = document.querySelector(".poem-text").value;
  const radios = document.getElementsByName("mood-radio");
  let selectedMood;

  radios.forEach((radio) => {
    if (radio.checked) {
      selectedMood = radio.value;
    }
  });
  document.querySelector(".poem-text").value = "";
  radios[2].checked = true;
  return [poemText, selectedMood];
};

const createClick = () => {
  const submit = document.querySelector(".create-submit");
  submit.addEventListener("click", () => {
    let temp = createSubmit();
    if (temp[0] == "") {
      window.alert("Please enter a poem before pressing submit");
      return;
    }
    console.log(temp);

    db.collection("poems").add({
      mood: temp[1],
      content: temp[0],
      author: "test",
      clicks: 5,
    });
  });
};
createClick();
