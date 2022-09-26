
var example_json_file = new XMLHttpRequest();  


example_json_file.open("GET","https://api2.binance.com/api/v3/ticker/24hr");


example_json_file.send();


example_json_file.onload=function(){
    var data=JSON.parse(example_json_file.response);

    for(var i=0;i<data.length;i++){
        console.log(data[i].symbol);
    }
    
    
}



