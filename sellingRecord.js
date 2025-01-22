var sum1=0;

        $(document).ready(function () {
            const apiUrl = 'https://script.google.com/macros/s/AKfycbzMAo0NLqkP25AOJpPoCQDYq5LSLbQc2kILp-mKvd1t0IdthFEw2zjP1GCp_VOYkF9kCw/exec' // Replace with your API URL
            
            var rownum=0;
            var len;

            // Fetch data from Google Sheets API
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    len=data.length;
                    
                    // Assuming the API returns data in an array of object
                    
                    const rows = data.reverse().map(item => { 
                        
                        rownum=rownum+1;
                        len=len-1;   
                        return `
                            <tr>
                                <td>${item.id}</td>
                                <td>${item.chalanNumber}</td>
                                <td>${item.date}</td>
                                <td>${item.due}</td>
                                <td>
                                    <button class="details11" onclick="openDetails1('${item.id}','${item.chalanNumber}','${item.date}','${item.customerName}','${item.companyName}','${item.productType}','${item.color}','${item.thickness}','${item.numberofProduct}','${item.stockBatch}','${item.buyingPrice}','${item.sellingPrice}','${item.totalPrice}','${item.amountCollected}','${item.due}','${item.profit}')">Details</button>
                                    <button class="updatePopupBTN" onclick="edit('${item.id}','${item.totalPrice}','${item.amountCollected}','${item.due}')">Edit</button>
                                    <button class="closePopupBTN" onclick="deletePreparation(${item.id})">Delete</button>
                                </td>
                            </tr>
                        `
                        
                        ;
                        
                    }).join('');
                    

                    // Append rows to the table body
                    $('#googleSheetTable tbody').html(rows);

                    // Initialize DataTable
                    $('#googleSheetTable').DataTable({
                        pageLength: 10,
                        lengthMenu: [5, 10, 25, 50, 100],
                        language: {
                            search: "Search:"
                        }
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        });
        

        

        var popup=document.getElementById("details1");
        function openDetails1(id,chalanNumber,date,customerName,companyName,productType,color,thickness,numberofProduct,stockBatch,buyingPrice,sellingPrice,totalPrice,amountCollected,due,profit){
            popup.classList.add("open-popup");
            document.getElementById("sid").innerHTML=id;
            document.getElementById("schalanNumber").innerHTML=chalanNumber;
            document.getElementById("sdate").innerHTML=date;
            document.getElementById("scustomerName").innerHTML=customerName;
            document.getElementById("scompanyName").innerHTML=companyName;
            document.getElementById("sproductType").innerHTML=productType;
            document.getElementById("scolor").innerHTML=color;
            document.getElementById("sthickness").innerHTML=thickness;
            document.getElementById("snumberofProduct").innerHTML=numberofProduct;
            document.getElementById("sstockBatch").innerHTML=stockBatch;
            document.getElementById("sbuyingPrice").innerHTML=buyingPrice;
            document.getElementById("ssellingPrice").innerHTML=sellingPrice;
            document.getElementById("stotalPrice").innerHTML=totalPrice;
            document.getElementById("samountCollected").innerHTML=amountCollected;
            document.getElementById("sdue").innerHTML=due;
            document.getElementById("sprofit").innerHTML=profit;
        }


        function closeDetails1(){
            popup.classList.remove("open-popup");
        }
    