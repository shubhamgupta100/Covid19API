
url = "https://api.covid19api.com/summary";
$.get(url, (data) => {
    console.log(data.Global.NewConfirmed);
    // console.log(data.Countries[76].TotalConfirmed);
    var dataHtml = `
        <tr class="table-light">
            <th scope="row">${data.Countries[76].Country}</th>
            <td>${data.Countries[76].NewConfirmed}</td>
            <td>${data.Countries[76].TotalConfirmed}</td>
            <td>${data.Countries[76].NewDeaths}</td>
            <td>${data.Countries[76].TotalDeaths}</td>
            <td>${data.Countries[76].NewRecovered}</td>
            <td>${data.Countries[76].TotalRecovered}</td>
        </tr>  
        
        <tr class="table-light">
            <th scope="row">World Wide</th>
          
            <td>${data.Global.NewConfirmed}</td>
            <td>${data.Global.TotalConfirmed}</td>
            <td>${data.Global.NewDeaths}</td>
            <td>${data.Global.TotalDeaths}</td>
            <td>${data.Global.NewRecovered}</td>
            <td>${data.Global.TotalRecovered}</td>
        </tr> 
`
$('#covidData').html(dataHtml);
});
