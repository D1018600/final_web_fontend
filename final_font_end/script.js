function changeIcon1() {
  var icon = document.getElementById("icon1");
  icon.src = "down.png";
  icon.alt = "向下箭頭";
}

function changeIconBack1() {
  var icon = document.getElementById("icon1");
  icon.src = "right.png";
  icon.alt = "向右箭頭";
}

function changeIcon2() {
  var icon = document.getElementById("icon2");
  icon.src = "down.png";
  icon.alt = "向下箭頭";
}

function changeIconBack2() {
  var icon = document.getElementById("icon2");
  icon.src = "right.png";
  icon.alt = "向右箭頭";
}

function changeIcon3() {
  var icon = document.getElementById("icon3");
  var flag = document.getElementById("icon4");
  flag.src = "flag_inv.png";
  flag.alt = "反旗子";
  icon.src = "down.png";
  icon.alt = "向下箭頭";
}

function changeIconBack3() {
  var icon = document.getElementById("icon3");
  var flag = document.getElementById("icon4");
  flag.src = "flag.png";
  flag.alt = "反旗子";
  icon.src = "right.png";
  icon.alt = "向右箭頭";
}

function clearInput() {
  var sid = document.getElementById("username");
  var pw = document.getElementById("password");
  sid.innerHTML = "";
  pw.innerHTML = "";
}
