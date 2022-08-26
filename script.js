const table = () => {
  const number = document.getElementById("number").value;
  let showTable = document.getElementById("show-table");

  for (let i = 0; i < 11; i++) {
    showTable.innerHTML += ` 
    <tbody>
      <td>${number}X${[i]}</td>
      <td>${number * [i]}</td>
    </tbody>
    `;
  }
  clear();
};

const clear = () => {
  document.getElementById("number").value = "";
};

const clearTable = () => {
  document.getElementById("show-table").innerHTML = "";
};
