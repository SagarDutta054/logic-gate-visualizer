const diagram1 = document.querySelector(".diagram-1");
const diagram2 = document.querySelector(".diagram-2");
const diagram3 = document.querySelector(".diagram-3");

/*Bulbs inside gates */
const lightAND = document.querySelector(".light-and");
const lightOR = document.querySelector(".light-or");
const lightNOT = document.querySelector(".light-not");

// lightNOT.classList.add("glow-on");
/*Switch1 and Switch2 of AND gate */
const switch_1_AND = document.querySelector(".switch-1-and");
const backgroundOval_1_AND = document.querySelector(".background-oval-1-and");
const circularHead_1_AND = document.querySelector(".circular-head-1-and");

const switch_2_AND = document.querySelector(".switch-2-and");
const backgroundOval_2_AND = document.querySelector(".background-oval-2-and");
const circularHead_2_AND = document.querySelector(".circular-head-2-and");

/*Switch1 and Switch2 of OR gate */
const switch_1_OR = document.querySelector(".switch-1-or");
const backgroundOval_1_OR = document.querySelector(".background-oval-1-or");
const circularHead_1_OR = document.querySelector(".circular-head-1-or");

const switch_2_OR = document.querySelector(".switch-2-or");
const backgroundOval_2_OR = document.querySelector(".background-oval-2-or");
const circularHead_2_OR = document.querySelector(".circular-head-2-or");

/*Only one  switch is used in NOT gate */
const switch_2_NOT = document.querySelector(".switch-2-not");
const backgroundOval_2_NOT = document.querySelector(".background-oval-2-not");
const circularHead_2_NOT = document.querySelector(".circular-head-2-not");

const tableAND = document.getElementById("table-and");
const tableOR = document.getElementById("table-or");
const tableNOT = document.getElementById("table-not");

const tableRow1 = document.querySelectorAll(".table-row-1");
const tableRow2 = document.querySelectorAll(".table-row-2");
const tableRow3 = document.querySelectorAll(".table-row-3");
const tableRow4 = document.querySelectorAll(".table-row-4");

const descriptionText = document.getElementById("description");
const stepInformation = document.getElementById("step-information");

const inputGate = document.getElementById("input-selection");
var gateName = inputGate.value;
// console.log("gate:",gateName);

const highlightRow1 = () => {
  tableRow1.forEach((e) => {
    e.classList.add("animation-blink");
  });
};
const highlightRow2 = () => {
  tableRow2.forEach((e) => {
    e.classList.add("animation-blink");
  });
};
const highlightRow3 = () => {
  tableRow3.forEach((e) => {
    e.classList.add("animation-blink");
  });
};
const highlightRow4 = () => {
  tableRow4.forEach((e) => {
    e.classList.add("animation-blink");
  });
};
const turnOffLights = () => {
  lightAND.classList.remove("glow-on");
  lightOR.classList.remove("glow-on");
  lightNOT.classList.remove("glow-on");
};
const removeRowHighlights = () => {
  tableRow1.forEach((e) => {
    e.classList.remove("animation-blink");
  });
  tableRow2.forEach((e) => {
    e.classList.remove("animation-blink");
  });
  tableRow3.forEach((e) => {
    e.classList.remove("animation-blink");
  });
  tableRow4.forEach((e) => {
    e.classList.remove("animation-blink");
  });
};
// tableRow2.classList.add('animation-blink');
// tableRow3.classList.add('animation-blink');
// tableRow4.classList.add('animation-blink');

/*This function will clear the diagram section as a preparation to 
show the next diagram (as chosen by the user)*/
const diagramReset = () => {
  diagram1.classList.remove("active-display");
  diagram2.classList.remove("active-display");
  diagram3.classList.remove("active-display");
};
/*This function will clear the table section as a preparation to 
show the next table (as chosen by the user)*/
const tableReset = () => {
  tableAND.classList.remove("active-display");
  tableOR.classList.remove("active-display");
  tableNOT.classList.remove("active-display");
};
const descriptionReset = () => {
  descriptionText.innerText = "";
};
const stepInformationReset = () => {
  stepInformation.innerText = "";
};

const activateAND = () => {
  diagram1.classList.add("active-display");
  tableAND.classList.add("active-display");
};
const activateOR = () => {
  diagram2.classList.add("active-display");
  tableOR.classList.add("active-display");
};
const activateNOT = () => {
  diagram3.classList.add("active-display");
  tableNOT.classList.add("active-display");
};

// tableAND.classList.add("active-display");
// tableOR.classList.add("active-display");
// tableNOT.classList.add("active-display");

// diagram1.classList.add("active-display");
// diagram2.classList.add("active-display");
// diagram3.classList.add("active-display");

var bit1 = 0;
var bit2 = 0;

// diagramReset();
// tableReset();
// descriptionReset();
// stepInformationReset();
const handle_AND_Situation = () => {
  if (bit1 == 0 && bit2 == 0) {
    lightAND.classList.remove("glow-on");
    highlightRow1();
    stepInformation.innerText = `As both the inputs are 0 (both the switches are off), the circuit is not getting completed so the output is 0 (The bulb is off).`;
  }
  if (bit1 == 0 && bit2 == 1) {
    lightAND.classList.remove("glow-on");
    highlightRow2();
    stepInformation.innerText = `As one switch is off (input=0), the circuit is not getting completed, so the output is 0 (The bulb is off).`;
  }
  if (bit1 == 1 && bit2 == 0) {
    lightAND.classList.remove("glow-on");
    highlightRow3();
    stepInformation.innerText = `As one switch is off (input=0), the circuit is not getting completed, so the output is 0 (The bulb is off).`;
  }
  if (bit1 == 1 && bit2 == 1) {
    highlightRow4();
    lightAND.classList.add("glow-on");
    stepInformation.innerText = `As both the switches are on (input=1), the circuit is getting completed, so the output is 1 (The bulb is on).`;
  }
};
const handle_OR_Situation = () => {
  if (bit1 == 0 && bit2 == 0) {
    highlightRow1();
    lightOR.classList.remove("glow-on");
    stepInformation.innerText = `As both the inputs are 0 (both the switches are off), the circuit is not getting completed so the output is 0 (The bulb is off).`;
  }
  if (bit1 == 0 && bit2 == 1) {
    highlightRow2();
    lightOR.classList.add("glow-on");
    stepInformation.innerText = `As a single input=1 completing the circuit, the output is 1 (The bulb is on).`;
  }
  if (bit1 == 1 && bit2 == 0) {
    highlightRow3();
    lightOR.classList.add("glow-on");
    stepInformation.innerText = `As a single input=1 completing the circuit, the output is 1 (The bulb is on).`;
  }
  if (bit1 == 1 && bit2 == 1) {
    highlightRow4();
    lightOR.classList.add("glow-on");
    stepInformation.innerText = `As both the switches are on (input=1), the circuit is getting completed, so the output is 1 (The bulb is on).`;
  }
};
const handle_NOT_Situation = () => {
  if (bit2 == 0) {
    highlightRow1();
    lightNOT.classList.add("glow-on");
    stepInformation.innerText = `As the circuit is complete when the input=0, the output is 1 (The bulb is on).`;
  } else {
    highlightRow2();
    lightNOT.classList.remove("glow-on");
    stepInformation.innerText = `Making input = 1 (turning the switch on), it causes short circuit and a large portion of the current flows accross the lowest resistance path, making the output = 0 (The bulb is off). `;
  }
};

const evaluateInput_Bulb_Table_stepInfo = () => {
  removeRowHighlights();

  if (gateName == "and") {
    handle_AND_Situation();
  } else if (gateName == "or") {
    handle_OR_Situation();
  } else {
    handle_NOT_Situation();
  }
};

switch_1_AND.addEventListener("click", () => {
  backgroundOval_1_AND.classList.toggle("on");
  circularHead_1_AND.classList.toggle("on");
  bit1 = bit1 == 0 ? 1 : 0;

  evaluateInput_Bulb_Table_stepInfo();
});
switch_2_AND.addEventListener("click", () => {
  backgroundOval_2_AND.classList.toggle("on");
  circularHead_2_AND.classList.toggle("on");
  bit2 = bit2 == 0 ? 1 : 0;

  evaluateInput_Bulb_Table_stepInfo();
});

switch_1_OR.addEventListener("click", () => {
  backgroundOval_1_OR.classList.toggle("on");
  circularHead_1_OR.classList.toggle("on");
  bit1 = bit1 == 0 ? 1 : 0;

  evaluateInput_Bulb_Table_stepInfo();
});
switch_2_OR.addEventListener("click", () => {
  backgroundOval_2_OR.classList.toggle("on");
  circularHead_2_OR.classList.toggle("on");
  bit2 = bit2 == 0 ? 1 : 0;

  evaluateInput_Bulb_Table_stepInfo();
});

switch_2_NOT.addEventListener("click", () => {
  backgroundOval_2_NOT.classList.toggle("on");
  circularHead_2_NOT.classList.toggle("on");
  bit2 = bit2 == 0 ? 1 : 0;
  evaluateInput_Bulb_Table_stepInfo();
});

const turn_Off_AND_switches = () => {
  backgroundOval_1_AND.classList.remove("on");
  circularHead_1_AND.classList.remove("on");
  backgroundOval_2_AND.classList.remove("on");
  circularHead_2_AND.classList.remove("on");
};
const turn_Off_OR_switches = () => {
  backgroundOval_1_OR.classList.remove("on");
  circularHead_1_OR.classList.remove("on");
  backgroundOval_2_OR.classList.remove("on");
  circularHead_2_OR.classList.remove("on");
};
const turn_Off_NOT_switches = () => {
  backgroundOval_2_NOT.classList.remove("on");
  circularHead_2_NOT.classList.remove("on");
};

// diagramReset();
// tableReset();
// descriptionReset();
// stepInformationReset();
const resetView = () => {
  diagramReset();
  // turnOffLights();
  tableReset();
  descriptionReset();
  stepInformationReset();
  // removeRowHighlights();
  gateName = inputGate.value;
  bitReset();
};

const showAND = () => {
  diagram1.classList.add("active-display");
  tableAND.classList.add("active-display");
  descriptionText.innerText = `If all the inputs are 1 (or 'on'), then only the output of AND gate becomes 1.`;

  evaluateInput_Bulb_Table_stepInfo();
};
const showOR = () => {
  diagram2.classList.add("active-display");
  tableOR.classList.add("active-display");
  descriptionText.innerText = `If at least one of the inputs is 1 (or 'on'), the output of OR gate becomes 1.`;
  evaluateInput_Bulb_Table_stepInfo();
};
const showNOT = () => {
  diagram3.classList.add("active-display");
  tableNOT.classList.add("active-display");
  descriptionText.innerText = `The input value gets altered in the output in a NOT gate which means if input == 1 output will be 0 and if input == 0 output will be 1.`;
  evaluateInput_Bulb_Table_stepInfo();
};

const bitReset = () => {
  bit1 = 0;
  bit2 = 0;
};
const showSelectedGate = (gate) => {
  turnOffLights();
  if (gate == "and") {
    gateName = "and";
    bitReset();
    showAND();
  } else if (gate == "or") {
    gateName = "or";
    bitReset();
    showOR();
  } else {
    gateName = "not";
    bitReset();
    showNOT();
  }
};
const resetSwitches = () => {
  turn_Off_AND_switches();
  turn_Off_OR_switches();
  turn_Off_NOT_switches();
};
inputGate.addEventListener("change", () => {
  console.log(inputGate.value);
  resetView();
  resetSwitches();
  showSelectedGate(inputGate.value);
});
showAND();
