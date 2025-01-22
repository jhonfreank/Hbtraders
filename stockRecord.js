
        $(document).ready(function () {
            const apiUrl = 'https://script.google.com/macros/s/AKfycbyt-t4UWYJqPiekPad9guNkdLSeQtxC5WFcKZ7KJ0zbx19n0UF8eiE2yipdARAKGESc6Q/exec' // Replace with your API URL
            
            // Fetch data from Google Sheets API
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
        
                    // Assuming the API returns data in an array of object
                    
                    const rows = data.reverse().map(item => { 
                        
                        return `
                            <tr>
                                <td>${item.id}</td>
                                <td>${item.productBatch}</td>
                                <td>${item.date}</td>
                                <td>${item.companyName}</td>
                                <td>${item.productType}</td>
                                <td>${item.color}</td>
                                <td>${item.thickness}</td>
                                <td>${item.numberofStock}</td>
                                <td>${item.buyingPrice}</td>
                                <td>                      
                                    <button class="clobtn" onclick="deletePreparation(${item.id})">Delete</button>
                                </td>
                            </tr>
                        `   
                        ;
                    }).join('');
                    // Append rows to the table body
                    $('#googleSheetTable1 tbody').html(rows);

                    // Initialize DataTable
                    $('#googleSheetTable1').DataTable({
                        pageLength: 10,
                        lengthMenu: [5, 10, 25, 50, 100],
                        language: {
                            search: "Search:"
                        }
                    });
                })
                .catch(error => console.error('Error fetching data:', error));
        });

        let popupDelete=document.getElementById("deleteContainersr");

        function deletePopupsr(){
            popupDelete.classList.add("open-addStock");
        }
        function deletePopupclose(){
            popupDelete.classList.remove("open-addStock");
        }

        //---------Delete Record--------
        const API_URLDsrf = 'https://script.google.com/macros/s/AKfycbyndLFsRaqt91zq8W2tsHWEmxGdfltlfx0SJeNih5TKwj19zrg_J6wcMm84UcEAnm7AUg/exec';

        function deletePreparation(id){
            popupDelete.classList.add("open-addStock");
            document.getElementById('didsrf').value=id;
        }
        async function deleteData(){
            let id=document.getElementById('didsrf').value;
            const response = await fetch(`${API_URLDsrf}?action=delete&id=${id}`);
            popupDelete.classList.remove("open-addStock");
            const result = await response.text();
            alert(result);
        }
//
