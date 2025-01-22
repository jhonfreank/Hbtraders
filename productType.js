
const API_URL4 = 'https://script.google.com/macros/s/AKfycbxmAz39QtYg3VQt0ZVOgDbilIfO2P1KTYK6SP22-Rp4w4_bPlHQ_x2OoVvr7NisYWOX/exec';

async function readDataCompanyname() {
    const response = await fetch(`${API_URL4}?action=read`);
    const data = await response.json();
    let displaySpace=document.getElementById('productType');
    displaySpace.innerHTML='';
    for(let i=0; i<data.length; i++){
        const rowdata=`
        <option value="${data[i][1]}">${data[i][1]}</option>
        `;
        displaySpace.innerHTML += rowdata;
    }

  }
  document.addEventListener("DOMContentLoaded", readDataCompanyname);//Function name which i want to display.

// _______add product type__________
async function AddProductType(){
    let productType=document.getElementById('ACNProductType').value;
    if(productType){
        const response = await fetch(`${API_URL4}?action=create&productType=${productType}`);
        const result = await response.text();
        alert(result);
    }
    else{
        alert('Plese fill Data');
    }
}