
const API_URL5 = 'https://script.google.com/macros/s/AKfycbzcvBobaKxW9kJk7ACOfv3YjMgeADLUH_OOoViKhCg0oIkbOboZ6oi4G5N0ZNnHaYoQ/exec';

async function readDataCompanyname() {
    const response = await fetch(`${API_URL5}?action=read`);
    const data = await response.json();
    let displaySpace=document.getElementById('color');
    displaySpace.innerHTML="";
    for(let i=0; i<data.length; i++){
        const rowdata=`
        <option value="${data[i][1]}">${data[i][1]}</option>
        `;
        displaySpace.innerHTML += rowdata;
    }

  }
  document.addEventListener("DOMContentLoaded", readDataCompanyname);//Function name which i want to display.

// ------------Add Color__________
async function AddColor(){
    let color=document.getElementById('ACNColor').value;
    if(color){
        const response = await fetch(`${API_URL5}?action=create&color=${color}`);
        const result = await response.text();
        alert(result);
    }
    else{
        alert('Plese fill Data');
    }
}