// console.log("Hello Wddorld");

let fullName = "Yi-Ta Chen";
let fullNameHtml = document.getElementById("full_name");
fullNameHtml.innerText = fullName;

let date = new Date();
let datestr = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();

document.getElementById("date").innerText = datestr;
document.getElementById("email").innerText = "f8162426@hotmail.com";

function change_name() {
  let new_name = prompt("Please enter your name: ");
  let isStr = typeof new_name === "string";

  while (new_name == null || new_name == "" || isStr == false) {
    new_name = prompt("Please enter your name");
  }
  fullNameHtml.innerText = new_name;
}

document.getElementById("http").innerText = "80 port / Layer 7";
document.getElementById("https").innerText = "443 port / Layer 7";
document.getElementById("ssh").innerText = "22 port / Layer 7";
document.getElementById("dns").innerText = "53 port / Layer 7";

function html_list_create() {
  //   console.log("html_list_create");

  document.getElementById("list_1").innerHTML = "";
  document.getElementById("list_2").innerHTML = "";
  document.getElementById("list_3").innerHTML = "";

  let list_number = prompt("How many items would you like in the list:  ");
  while (checkNumberInvalid(list_number)) {
    list_number = prompt(
      "only 1~10, How many items would you like in the list:  :"
    );
  }
  let new_list_html = "";
  for (let i = 0; i < list_number; i++) {
    new_list_html += getListContent(i + 1);
  }
  document.getElementById("list_items").innerHTML = new_list_html;
  //   document.getElementById("list_items").innerHTML =
  //     '<div class="d-flex mb-4" id="list_1">' +
  //     "<!-- icon -->" +
  //     '<div class="text-primary">' +
  //     '<img width="40" height="20" src="demo.files/svg/various/line-chart.svg" alt="...">' +
  //     "</div>" +
  //     '<div class="mx-2">' +
  //     "<!-- heading -->" +
  //     '<h3 class="h5 fw-bold mb-1">' +
  //     "Item #999" +
  //     "</h3>" +
  //     "<!-- text -->" +
  //     "<p>" +
  //     "This is item #1." +
  //     "</p>" +
  //     "</div>" +
  //     "</div>";
}

function checkNumberInvalid(inputNumber) {
  let num = Number(inputNumber);
  //   console.log(Number(num));
  if (isNaN(num)) return true;
  if (num > 10 || num < 1) return true;
  //   console.log(num);
  return false;
}

function getListContent(number) {
  let returnStr =
    '<div class="d-flex mb-4" id="list_1">' +
    "<!-- icon -->" +
    '<div class="text-primary">' +
    '<img width="40" height="20" src="demo.files/svg/various/line-chart.svg" alt="...">' +
    "</div>" +
    '<div class="mx-2">' +
    "<!-- heading -->" +
    '<h3 class="h5 fw-bold mb-1">' +
    "Item #" +
    String(number) +
    "</h3>" +
    "<!-- text -->" +
    "<p>" +
    "This is item #" +
    String(number) +
    "." +
    "</p>" +
    "</div>" +
    "</div>";
  return returnStr;
}

// list_items
