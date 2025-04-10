console.log("Executing Script");

async function select() {
  let x = Math.random();
  if (x < 0.333) {
    return 1; // Rock
  } else if (x < 0.666) {
    return 2; // Paper
  } else {
    return 3; // Scissors
  }
}

function Game() {
  let y = 0;

  document.getElementById("r").addEventListener("click", async () => {
    y = 1;
    let id = document.getElementById("r");
    id.classList.toggle("select");
    await playGame(y, id);
  });

  document.getElementById("p").addEventListener("click", async () => {
    y = 2;
    let id = document.getElementById("p");
    id.classList.toggle("select");
    await playGame(y, id);
  });

  document.getElementById("s").addEventListener("click", async () => {
    y = 3;
    let id = document.getElementById("s");
    id.classList.toggle("select");
    await playGame(y, id);
  });
}

async function playGame(y, id) {
  let x = await select(); // Get computer choice

  let result = "";
  if (x === y) {
    result = "It's a draw!!";
  } else if (
    (y === 1 && x === 3) ||
    (y === 2 && x === 1) ||
    (y === 3 && x === 2)
  ) {
    result = "You won!!";
  } else {
    result = "You lost!!";
  }

  let comp = ``;
  let ctxt = ``;
  if (x == 1) {
    ctxt = `Rock`;
    comp = `<img src="rock.png" alt="">`;
  } else if (x == 2) {
    ctxt = `Paper`;
    comp = `<img src="paper.png" alt="">`;
  } else {
    ctxt = `Scissors`
    comp = `<img src="scissors.png" alt="">`;
  }

  document.querySelector("#rnd_txt").innerHTML = `${ctxt}`;
  document.querySelector("#rnd").innerHTML = `${comp}`;
  document.querySelector("#res").innerHTML = result;
  console.log("Computer choice (x): " + x);
  console.log("Your choice (y): " + y);

  //disabled
  document.getElementById("r").disabled = true;
  document.getElementById("p").disabled = true;
  document.getElementById("s").disabled = true;

  await again(id);
}

async function again(id) {
  document.querySelector("#again").innerHTML = `
    <p>Play again?</p>
    <button id="y">Yes</button>
    <button id="n">No</button>
    `;
  document.getElementById("y").addEventListener("click", async () => {
    document.getElementById("r").disabled = false;
    document.getElementById("p").disabled = false;
    document.getElementById("s").disabled = false;

    document.querySelector("#res").innerHTML = ``;
    document.querySelector("#again").innerHTML = ``;
    document.querySelector("#rnd").innerHTML = `?`;
    document.querySelector("#rnd_txt").innerHTML = `???`;

    id.classList.toggle("select");

    document.getElementById("r").removeEventListener("click");
    document.getElementById("p").removeEventListener("click");
    document.getElementById("s").removeEventListener("click");

    Game();
  });

  document.getElementById("n").addEventListener("click", async () => {
    document.querySelector(
      "#again"
    ).innerHTML = `Thanks For Playing :) \n`;
  });
}

Game();
