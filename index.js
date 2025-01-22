const API_URL_sell_record = 'https://script.google.com/macros/s/AKfycbyQDDtygfhuNAEKsQL6tc6RZ5_qQ6NTL9VZq_g1o5rbwB2bIHzMCrPaFuYdMXjW07QAbQ/exec';


async function displayTotalSellQuentity() {
  const response = await fetch(`${API_URL_sell_record}?action=read`);
  const data = await response.json();
  let totalsellQuentity=0;
  for(let i=0; i<data.length;i++){
    totalsellQuentity=totalsellQuentity+1;
  }
  document.getElementById('DisplaytotalSellQuentity').innerHTML=totalsellQuentity;
}

async function displaysellquentityByMonth(){
  const response = await fetch(`${API_URL_sell_record}?action=read`);
  const data = await response.json();
  let newDateStr="";
  let quentity=0;
  let sqmonth=document.getElementById('sqmonth').value;
  let sqyear=document.getElementById('sqyear').value;
  let operator="-";
  let joinDate=sqmonth+operator+sqyear;
  for(let i=0; i<data.length; i++){
    newDateStr=data[i][2].substring(3,10)
    if(newDateStr==joinDate){
      quentity=quentity+1;
    }
  }
  document.getElementById('Displayquentityofsellbymonth').innerHTML=quentity;

}

async function displaysellquentityByYear(){
  const response = await fetch(`${API_URL_sell_record}?action=read`);
  const data = await response.json();
  let newDateStr="";
  let quentity=0;
  let sqyear=document.getElementById('sqyear2').value;
  for(let i=0; i<data.length; i++){
    newDateStr=data[i][2].substring(6,10)
    if(newDateStr==sqyear){
      quentity=quentity+1;
    }
  }
  document.getElementById('Displayquentityofsellbyyear').innerHTML=quentity;
}


async function displaysellquentityByDate(){
  const response = await fetch(`${API_URL_sell_record}?action=read`);
  const data = await response.json();
  let newDateStr="";
  let quentity=0;
  let sqdate=document.getElementById('sqbydate').value;
  let year=sqdate.substring(0,4);
  let month=sqdate.substring(5,7);
  let date=sqdate.substring(8,10);
  newDateStr=date+"-"+month+"-"+year;
  for(let i=0; i<data.length; i++){
    if(newDateStr==data[i][2]){
      quentity=quentity+1;
    }
  }

  document.getElementById('Displayquentityofsellbydate').innerHTML=quentity;
}



async function displayTotalDue() {
  const response = await fetch(`${API_URL_sell_record}?action=read`);
  const data = await response.json();
  let totalDue=0;
  for(let i=0; i<data.length;i++){
    totalDue=totalDue+data[i][14];
  }
  document.getElementById('displayTotalDue').innerHTML=totalDue;
}

async function displayDueByMonth(){
  const response = await fetch(`${API_URL_sell_record}?action=read`);
  const data = await response.json();
  let newDateStr="";
  let totalDue=0;
  let sdmonth=document.getElementById('sdmonth').value;
  let sdyear=document.getElementById('sdyear').value;
  let operator="-";
  let joinDate=sdmonth+operator+sdyear;
  for(let i=0; i<data.length; i++){
    newDateStr=data[i][2].substring(3,10)
    if(newDateStr==joinDate){
      totalDue=totalDue+data[i][14]
    }
  }
  document.getElementById('displayDuebymonth').innerHTML=totalDue;
}

async function displayDueByYear(){
  const response = await fetch(`${API_URL_sell_record}?action=read`);
  const data = await response.json();
  let totalDue=0;
  let newDateStr="";
  let sdyear=document.getElementById('sdyear2').value;
  for(let i=0; i<data.length; i++){
    newDateStr=data[i][2].substring(6,10)
    if(newDateStr==sdyear){
      totalDue=totalDue+data[i][14]
    }
  }
  document.getElementById('displayDuebyyear').innerHTML=totalDue;
}

async function displayDueByDate(){
  const response = await fetch(`${API_URL_sell_record}?action=read`);
  const data = await response.json();
  let newDateStr="";
  let totalDue=0;
  let sqdate=document.getElementById('sdbydate').value;
  let year=sqdate.substring(0,4);
  let month=sqdate.substring(5,7);
  let date=sqdate.substring(8,10);
  newDateStr=date+"-"+month+"-"+year;
  for(let i=0; i<data.length; i++){
    if(newDateStr==data[i][2]){
      totalDue=totalDue+data[i][14];
    }
  }

  document.getElementById('displayDuebydate').innerHTML=totalDue;
}

async function displayTotalProfit() {
  const response = await fetch(`${API_URL_sell_record}?action=read`);
  const data = await response.json();
  let totalProfit=0;
  for(let i=0; i<data.length;i++){
    totalProfit=totalProfit+data[i][15];
  }
  document.getElementById('displaytotalProfit').innerHTML=totalProfit;
}

async function displayProfitByMonth(){
  const response = await fetch(`${API_URL_sell_record}?action=read`);
  const data = await response.json();
  let newDateStr="";
  let totalProfit=0;
  let sdmonth=document.getElementById('spmonth').value;
  let sdyear=document.getElementById('spyear').value;
  let operator="-";
  let joinDate=sdmonth+operator+sdyear;
  for(let i=0; i<data.length; i++){
    newDateStr=data[i][2].substring(3,10)
    if(newDateStr==joinDate){
      totalProfit=totalProfit+data[i][15]
    }
  }
  document.getElementById('displayProfitbymonth').innerHTML=totalProfit;
}

async function displayProfitByYear(){
  const response = await fetch(`${API_URL_sell_record}?action=read`);
  let newDateStr="";
  const data = await response.json();
  let totalProfit=0;
  let sdyear=document.getElementById('spyear2').value;
  for(let i=0; i<data.length; i++){
    newDateStr=data[i][2].substring(6,10)
    if(sdyear==newDateStr){
      totalProfit=totalProfit+data[i][15]
    }
  }
  document.getElementById('displayProfitbyyear').innerHTML=totalProfit;
}

async function displayProfitByDate(){
  const response = await fetch(`${API_URL_sell_record}?action=read`);
  const data = await response.json();
  let newDateStr="";
  let totalProfit=0;
  let spdate=document.getElementById('spbyDate').value;
  let year=spdate.substring(0,4);
  let month=spdate.substring(5,7);
  let date=spdate.substring(8,10);
  newDateStr=date+"-"+month+"-"+year;
  for(let i=0; i<data.length; i++){
    if(newDateStr==data[i][2]){
      totalProfit=totalProfit+data[i][15];
    }
  }

  document.getElementById('displayProfitbyDate').innerHTML=totalProfit;
}
//-----------Stock Management------------------------

const API_WEBAPP_STOCKMANAGEMENT='https://script.google.com/macros/s/AKfycbyndLFsRaqt91zq8W2tsHWEmxGdfltlfx0SJeNih5TKwj19zrg_J6wcMm84UcEAnm7AUg/exec';

async function totalCurrentStock(){
  const response = await fetch(`${API_WEBAPP_STOCKMANAGEMENT}?action=read`);
  const data = await response.json();
  let sumOFSTOCK=0;
  for(let i=0; i<data.length; i++){
    sumOFSTOCK=sumOFSTOCK+data[i][7];
  }
  document.getElementById('outputTotalCurrentStock').innerHTML=sumOFSTOCK;

}

async function currentStockByThickness(){
  const response = await fetch(`${API_WEBAPP_STOCKMANAGEMENT}?action=read`);
  const data = await response.json();
  let scompanyName=document.getElementById('ssByThicknessCompanyName').value;
  let sProductType=document.getElementById('ssByThicknessProductType').value;
  let scolor=document.getElementById('ssByThicknesscolor').value;
  let sThickness=document.getElementById('ssByThicknessThickness').value;
  let detailsDisplay=document.getElementById('currentStockDetailsDisplayField');
  detailsDisplay.innerHTML="";
  let rowData="";
  let sumOFSTOCK=0;
  for(let i=0; i<data.length; i++){
    if(data[i][3]==scompanyName && data[i][4]==sProductType && data[i][5]==scolor && data[i][6]==sThickness){      
      sumOFSTOCK=sumOFSTOCK+data[i][7];
      rowData=`
        <tr>
          <td>${data[i][1]}</td>
          <td>${data[i][3]}</td>
          <td>${data[i][4]}</td>
          <td>${data[i][5]}</td>
          <td>${data[i][6]}</td>
          <td>${data[i][7]}</td>
          <td>${data[i][8]}</td>
        </tr>
      `;
      detailsDisplay.innerHTML+=rowData;
    }

  }
  document.getElementById('outputTotalCurrentStockByThickness').innerHTML=sumOFSTOCK;
}

//------------Display Data in the form---------------

const DISPLAY_COMPANY_NAME="https://script.google.com/macros/s/AKfycby82ICyUgum9D3uKLLy6KRjtGNi3Y7Rwt-lW5mgCNd6HC2veesbbYWzHbPpjjMCCbsr/exec";
const DISPLAY_PRODUCT_TYPE="https://script.google.com/macros/s/AKfycbwJuJpiX8xvA7WLmv28qZw70TB1lGbv80B_WtdyrxSozA1imhUxFMjLYN4Itp_WyqWR/exec";
const DISPLAY_COLOR="https://script.google.com/macros/s/AKfycbzFzoTQnEw_JKgGratzRiuVweIaMTeps_IcHbOlsvjoxk8UxfKuN1-k1hHW_CSrqhQo/exec";
const DISPLAY_THICKNESS="https://script.google.com/macros/s/AKfycbzCP5gcKdqwUbJWe68PTrBsQTWS8Ci-4t30ouLqQTVZPnXvtGVAjEg3-syBGjwhOy2FPw/exec";

async function DisplayStockForm(){
  const response = await fetch(`${DISPLAY_COMPANY_NAME}?action=read`);
  const data = await response.json();

  const response2 = await fetch(`${DISPLAY_PRODUCT_TYPE}?action=read`);
  const data2 = await response2.json();
  
  const response3 = await fetch(`${DISPLAY_COLOR}?action=read`);
  const data3 = await response3.json();

  const response4 = await fetch(`${DISPLAY_THICKNESS}?action=read`);
  const data4 = await response4.json();

  let dscompanyName=document.getElementById('ssByThicknessCompanyName');
  let dsproductType=document.getElementById('ssByThicknessProductType');
  let dscolor=document.getElementById('ssByThicknesscolor');
  let dsThickness=document.getElementById('ssByThicknessThickness');

  dscompanyName.innerHTML="";
  dsproductType.innerHTML="";
  dscolor.innerHTML="";
  dsThickness.innerHTML="";

  for(let i=0; i<data.length; i++){
    const row1=`
    <option value="${data[i][1]}">${data[i][1]}</option>
    `;
    dscompanyName.innerHTML+=row1;
  }

  for(let i=0; i<data2.length; i++){
    const row2=`
        <option value="${data2[i][1]}">${data2[i][1]}</option>
    `;
    dsproductType.innerHTML+=row2;
  }

  
  for(let i=0; i<data3.length; i++){
    const row3=`
        <option value="${data3[i][1]}">${data3[i][1]}</option>
    `;
    dscolor.innerHTML+=row3;
  }

  
  for(let i=0; i<data4.length; i++){
    const row4=`
        <option value="${data4[i][1]}">${data4[i][1]}</option>
    `;
    dsThickness.innerHTML+=row4;
  }

}
document.addEventListener("DOMContentLoaded", DisplayStockForm);//Function name which i want to display.

const popUpStockDetails=document.getElementById('currentStockDetails');

function openStockDetails(){
  popUpStockDetails.classList.add('open-currentStockDetails');
}
function closeStockDetails(){
  popUpStockDetails.classList.remove('open-currentStockDetails');
}
