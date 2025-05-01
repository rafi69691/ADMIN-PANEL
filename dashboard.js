
const keyList = document.getElementById("keyList");

function addKey() {
  const newKey = document.getElementById("newKey").value.trim();
  if (newKey) {
    const li = document.createElement("li");
    li.textContent = newKey;
    keyList.appendChild(li);
    document.getElementById("newKey").value = "";
    alert("Key added (Note: To save permanently, integrate Firebase or server).");
  }
}
