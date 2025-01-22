const API_URL = 'https://script.google.com/macros/s/AKfycbyQDDtygfhuNAEKsQL6tc6RZ5_qQ6NTL9VZq_g1o5rbwB2bIHzMCrPaFuYdMXjW07QAbQ/exec';
var popup1=document.getElementById("updatesealingRecord");


async function edit(id,totalPrice,amountCollected,due){
    popup1.classList.add("open-popup");
    document.getElementById('uid').value=id;
    document.getElementById("uamountCollected"). value=amountCollected;
    document.getElementById('udue').value=due;
    document.getElementById('utotalprice').value=totalPrice;
}

async function updateData() {
  const id = document.getElementById('uid').value;
  const collectedAmount = document.getElementById('uamountCollected').value;
  let due=document.getElementById('udue').value;

  const response = await fetch(`${API_URL}?action=update&id=${id}&collectedAmount=${collectedAmount}&due=${due}`);
  popup1.classList.remove("open-popup");
  const result = await response.text();
  alert(result);
  
}
function updateCalculation(){
    var collectedAmount=document.getElementById("uamountCollected").value || 0;
    var totalPrice=document.getElementById('utotalprice').value;
    var due=totalPrice-collectedAmount;
    document.getElementById('udue').value=due;
}
var popup2=document.getElementById("deleteContainer");

function deletePreparation(id){
    popup2.classList.add("open-popup");
    document.getElementById('did').value=id;
}
async function deleteData(){
    let id=document.getElementById('did').value;
    const response = await fetch(`${API_URL}?action=delete&id=${id}`);
    popup2.classList.remove("open-popup");
    const result = await response.text();
    alert(result);
}


function closePopupU(){
    popup1.classList.remove("open-popup");
}
function closePopupD(){
    popup2.classList.remove("open-popup");
}