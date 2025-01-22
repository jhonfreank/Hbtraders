
const API_URL6 = 'https://script.google.com/macros/s/AKfycbx1WbP13EIFSj9mJvNxWO_QftvZLMZiCm_b7IkpGmhGyQvQrI1nopBDSLSjaF4lCFiM-g/exec';

async function readDataCompanyname() {
    const response = await fetch(`${API_URL6}?action=read`);
    const data = await response.json();
    let displaySpace=document.getElementById('thickness');
    displaySpace.innerHTML = ""; 
    for(let i=0; i<data.length; i++){
        const rowdata=`
        <option value="${data[i][1]}">${data[i][1]}</option>
        `;
        displaySpace.innerHTML += rowdata;
    }

  }
  document.addEventListener("DOMContentLoaded", readDataCompanyname);//Function name which i want to display.

//-------Add thickness------------
async function AddThickness(){
    let thickness=document.getElementById('ACNThickness').value;
    if(thickness){
        const response = await fetch(`${API_URL6}?action=create&thickness=${thickness}`);
        const result = await response.text();
        alert(result);
    }
    else{
        alert('Plese fill Data');
    }
}