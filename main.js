// Changing side nav color
let url = window.location.pathname;
let path_arr = url.split("/");

console.log("000000000000000000000");
console.log(path_arr);

let pagePath = path_arr[path_arr.length - 1].slice(0, -5);

console.log("1111111111111111111111");
console.log(pagePath);

let subItem = document.getElementById(pagePath);

subItem.style.backgroundColor = "#33b32b";

let subAnchor = subItem.getElementsByTagName("a")[0];

subAnchor.style.color = "black";

// Changing top color
if (
  pagePath === "education" ||
  pagePath === "knowledge" ||
  pagePath === "softskill"
) {
  let topItem = document.getElementById("qualifications");
  topItem.style.backgroundColor = "white";
} else if (pagePath === "work" || pagePath === "projects") {
  let topItem = document.getElementById("experience");
  topItem.style.backgroundColor = "white";
} else if (pagePath === "attributes" || pagePath === "aboutme") {
  let topItem = document.getElementById("personal");
  topItem.style.backgroundColor = "white";
}

//  Changin
