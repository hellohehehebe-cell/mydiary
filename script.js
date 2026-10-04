const welcomePage = document.getElementById("welcomePage");
const thoughtsPage = document.getElementById("thoughtsPage");
const writePage = document.getElementById("writePage");
const thankPage = document.getElementById("thankPage");

const nextButton = document.getElementById("nextButton");
const createButton = document.getElementById("createButton");
const submitButton = document.getElementById("submitButton");

const writeBackButton =
  document.getElementById("writeBackButton");

const thankBackButton =
  document.getElementById("thankBackButton");

const thoughtInput =
  document.getElementById("thoughtInput");

const thoughtList =
  document.getElementById("thoughtList");

const characterCount =
  document.getElementById("characterCount");


/* FADE BETWEEN PAGES */

function changePage(oldPage, newPage) {

  oldPage.classList.add("fade-out");

  setTimeout(function () {

    oldPage.classList.add("hidden");
    oldPage.classList.remove("fade-out");

    newPage.classList.remove("hidden");
    newPage.classList.add("fade-in");

    setTimeout(function () {
      newPage.classList.remove("fade-in");
    }, 550);

  }, 450);
}


/* PAGE 1 → PAGE 2 */

nextButton.addEventListener("click", function () {
  changePage(welcomePage, thoughtsPage);
});


/* PAGE 2 → PAGE 3 */

createButton.addEventListener("click", function () {
  changePage(thoughtsPage, writePage);
});


/* PAGE 3 → PAGE 2 */

writeBackButton.addEventListener("click", function () {
  thoughtInput.value = "";
  characterCount.textContent = "0";

  changePage(writePage, thoughtsPage);
});


/* CHARACTER COUNTER */

thoughtInput.addEventListener("input", function () {
  characterCount.textContent =
    thoughtInput.value.length;
});


/* SUBMIT THOUGHT */

submitButton.addEventListener("click", function () {

  const thought = thoughtInput.value.trim();

  if (thought === "") {
    thoughtInput.focus();
    return;
  }


  /* CREATE AN ANONYMOUS POST */

  const newThought =
    document.createElement("div");

  newThought.className = "thought-card";

  newThought.textContent = thought;

  thoughtList.prepend(newThought);


  /* CLEAR WRITING BOX */

  thoughtInput.value = "";
  characterCount.textContent = "0";


  /* SHOW THANK YOU */

  changePage(writePage, thankPage);
});


/* THANK YOU → THOUGHTS */

thankBackButton.addEventListener("click", function () {
  changePage(thankPage, thoughtsPage);
});