function saklar(action, lamp) {
  let togglert1 = document.getElementById("default-togglert1");
  let togglert2 = document.getElementById("default-togglert2");
  let toggled1 = document.getElementById("default-toggled1");
  let toggled2 = document.getElementById("default-toggled2");
  let togglet1 = document.getElementById("default-togglet1");
  let togglet2 = document.getElementById("default-togglet2");
  

  if (togglert1.checked) {
    lampurt1.src = "asset/images/on.gif";
  } else {
    lampurt1.src = "asset/images/off.gif";
  }

  if (togglert2.checked) {
    lampurt2.src = "asset/images/on.gif";
  } else {
    lampurt2.src = "asset/images/off.gif";
  }

  if (toggled1.checked) {
    lampud1.src = "asset/images/on.gif";
  } else {
    lampud1.src = "asset/images/off.gif";
  }

  if (toggled2.checked) {
    lampud2.src = "asset/images/on.gif";
  } else {
    lampud2.src = "asset/images/off.gif";
  }

  if (togglet1.checked) {
    lamput1.src = "asset/images/on.gif";
  } else {
    lamput1.src = "asset/images/off.gif";
  }

  if (togglet2.checked) {
    lamput2.src = "asset/images/on.gif";
  } else {
    lamput2.src = "asset/images/off.gif";
  }

}

