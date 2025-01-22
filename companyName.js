
const API_URL3 = 'https://script.google.com/macros/s/AKfycbwSSgM_AOCIw_0yVanDpTElz8GEnikpfkotYvfsxTWvkg8nBGhaVavjSROWO11R_WjO/exec';

async function readDataCompanyname() {
    const response = await fetch(`${API_URL3}?action=read`);
    const data = await response.json();
    let displaySpace=document.getElementById('copanyName');
    displaySpace.innerHTML= "";
    for(let i=0; i<data.length; i++){
        const rowdata=`
        <option value="${data[i][1]}">${data[i][1]}</option>
        `;
        displaySpace.innerHTML += rowdata;
    }

  }
  document.addEventListener("DOMContentLoaded", readDataCompanyname);//Function name which i want to display.

//______Add Company Name____

async function AddCompanyName(){
    let companyName=document.getElementById('ACNcompanyName').value;
    if(companyName){
        const response = await fetch(`${API_URL3}?action=create&companyName=${companyName}`);
        const result = await response.text();
        alert(result);
    }
    else{
        alert('Plese fill Data');
    }
}