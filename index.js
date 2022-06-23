// localStorage.removeItem('records');
let lists = JSON.parse(localStorage.getItem("records"))
  ? JSON.parse(localStorage.getItem("records"))
  : [];

lists.forEach((item) => {
  console.log(item.name);
  document.querySelector("#tasks").innerHTML += `
 <p><input type="checkbox" class="cb">${item.name}</p>`;
});

function addRecord() {
  // e.preventDefault();
  lists.push({
    name: document.getElementById("name").value,
  });
  //
  localStorage.setItem("records", JSON.stringify(lists));
}
function deleteRecord(id) {
  if (id > -1) {
    lists.splice(id, 1);
    // After delete
    localStorage.setItem("records", JSON.stringify(lists));
  } else {
    console.log("Name was not found");
  }
}
// Load data
(function loadData() {
  console.table(lists);
})();
// loadData();
// Add Event listener
document.querySelector("#addRecord").addEventListener("click", addRecord);
// delete record
document.querySelector("#deleteRecord").addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let index = lists.findIndex((item) => item.name === name);
  console.log(index);
  deleteRecord(index);
});
