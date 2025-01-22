//Company Name-----------------
const API_COMPANY_NAME_PD="https://script.google.com/macros/s/AKfycby82ICyUgum9D3uKLLy6KRjtGNi3Y7Rwt-lW5mgCNd6HC2veesbbYWzHbPpjjMCCbsr/exec"; 
const API_PRODUCTTYPE_PD="https://script.google.com/macros/s/AKfycbwJuJpiX8xvA7WLmv28qZw70TB1lGbv80B_WtdyrxSozA1imhUxFMjLYN4Itp_WyqWR/exec";
const API_COLOR_PD="https://script.google.com/macros/s/AKfycbzFzoTQnEw_JKgGratzRiuVweIaMTeps_IcHbOlsvjoxk8UxfKuN1-k1hHW_CSrqhQo/exec";
const API_THICKNESS_PD="https://script.google.com/macros/s/AKfycbzCP5gcKdqwUbJWe68PTrBsQTWS8Ci-4t30ouLqQTVZPnXvtGVAjEg3-syBGjwhOy2FPw/exec";

async function DisplayCompanyNamePD(){
    const response = await fetch(`${API_COMPANY_NAME_PD}?action=read`);
    const data = await response.json();

    let displayCompanyName=document.getElementById('conpanyNameListDisplayField');
    displayCompanyName.innerHTML="";

    for(let i=0; i<data.length; i++){
        const row=`
            <tr>
                <td>${data[i][0]}</td>
                <td>${data[i][1]}</td>
                <td><button onclick="deleteCompanyName(${data[i][0]})">Delete</button></td>
            </tr>
        `;
        displayCompanyName.innerHTML+=row;
    }
}

document.addEventListener("DOMContentLoaded", DisplayCompanyNamePD);//Function name which i want to display.

 async function deleteCompanyName(id){
    const response = await fetch(`${API_COMPANY_NAME_PD}?action=delete&id=${id}`);
    const result = await response.text();
    alert(result);
    DisplayCompanyNamePD();
}

//---Product Type______________
async function DisplayProductTypePD(){
    const response = await fetch(`${API_PRODUCTTYPE_PD}?action=read`);
    const data = await response.json();

    let display=document.getElementById('productTypeListDisplayField');
    display.innerHTML="";

    for(let i=0; i<data.length; i++){
        const row=`
            <tr>
                <td>${data[i][0]}</td>
                <td>${data[i][1]}</td>
                <td><button onclick="deleteProductTypeName(${data[i][0]})">Delete</button></td>
            </tr>
        `;
        display.innerHTML+=row;
    }
}
document.addEventListener("DOMContentLoaded", DisplayProductTypePD);//Function name which i want to display.

async function deleteProductTypeName(id){
    const response = await fetch(`${API_PRODUCTTYPE_PD}?action=delete&id=${id}`);
    const result = await response.text();
    alert(result);
    DisplayProductTypePD();
}

//______Color__________________
async function DisplayColorPD(){
    const response = await fetch(`${API_COLOR_PD}?action=read`);
    const data = await response.json();

    let display=document.getElementById('colorListDisplayField');
    display.innerHTML="";

    for(let i=0; i<data.length; i++){
        const row=`
            <tr>
                <td>${data[i][0]}</td>
                <td>${data[i][1]}</td>
                <td><button onclick="deleteColorPD(${data[i][0]})">Delete</button></td>
            </tr>
        `;
        display.innerHTML+=row;
    }
}
document.addEventListener("DOMContentLoaded", DisplayColorPD);//Function name which i want to display.

async function deleteColorPD(id){
    const response = await fetch(`${API_COLOR_PD}?action=delete&id=${id}`);
    const result = await response.text();
    alert(result);
    DisplayColorPD();
}

//______Thickness_____________
async function DisplayThicknessPD(){
    const response = await fetch(`${API_THICKNESS_PD}?action=read`);
    const data = await response.json();

    let display=document.getElementById('thicknessListDisplayField');
    display.innerHTML="";

    for(let i=0; i<data.length; i++){
        const row=`
            <tr>
                <td>${data[i][0]}</td>
                <td>${data[i][1]}</td>
                <td><button onclick="deleteThicknessPD(${data[i][0]})">Delete</button></td>
            </tr>
        `;
        display.innerHTML+=row;
    }
}
document.addEventListener("DOMContentLoaded", DisplayThicknessPD);//Function name which i want to display.

async function deleteThicknessPD(id){
    const response = await fetch(`${API_THICKNESS_PD}?action=delete&id=${id}`);
    const result = await response.text();
    alert(result);
    DisplayThicknessPD()
}