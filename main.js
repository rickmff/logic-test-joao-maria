function generateTable() {
  let totalPeras = 0;
  let totalMacans = 0;
  resetTable();
  const month = 30;
  const table = document.getElementById("Table");
  for (let day = 1; day <= month; day++) {
    //const { peras, macans, beststudant, fruta1, fruta2, fruta3 } =
    const data = generateObject(day);
    totalPeras += data.peras;
    totalMacans += data.macans;
    const row = table.insertRow();
    for (const [, value] of Object.entries(data)) {
      row.insertCell().innerHTML = value || "-";
    }
  }
  document.getElementById(
    "totalFruits"
  ).innerHTML = `Este mês a professora levou ${totalPeras} maçãs e ${totalMacans} peras`;
}

let buttonLabel = "Gerar Tabela";

function changeButtonLabel() {
  const button = document.getElementById("myButton");
  if (buttonLabel === "Gerar Tabela") {
    button.innerHTML = "Redefinir";
    button.classList.remove("blue");
    button.classList.add("red");
    buttonLabel = "Redefinir";
  } else {
    button.innerHTML = "Gerar Tabela";
    button.classList.remove("red");
    button.classList.add("blue");
    buttonLabel = "Gerar Tabela";
  }
}

function resetTable() {
  const table = document.getElementById("Table");
  if (table.rows.length > 1) {
    while (table.rows.length > 0) {
      table.deleteRow(1);
    }
  }
}

function generateBestStudant() {
  const num = Math.floor(Math.random() * 10);
  return num % 2 === 0 ? "Joao" : "Maria";
}

function generateFruits() {
  const num = Math.floor(Math.random() * 5);
  return num;
}

function generateFruitsDelivery(bestStudant, peras, macans) {
  let fruits = [];
  while (fruits.length < 3) {
    if (bestStudant === "Joao" && peras > 0) {
      fruits.push("pera");
      peras--;
    } else if (bestStudant === "Joao" && macans > 0) {
      fruits.push("maca");
      macans--;
    } else if (bestStudant === "Maria" && peras > 0) {
      fruits.push("pera");
      peras--;
    } else if (bestStudant === "Maria" && macans > 0) {
      fruits.push("maca");
      macans--;
    } else {
      break;
    }
  }
  return fruits;
}

function generateObject(day) {
  const bestStudant = generateBestStudant();
  const peras = generateFruits();
  const macans = generateFruits();
  const fruits = generateFruitsDelivery(bestStudant, peras, macans);
  const object = {
    day,
    peras: peras,
    macans: macans,
    beststudant: bestStudant,
    fruta1: fruits[0],
    fruta2: fruits[1],
    fruta3: fruits[2],
  };
  return object;
}
