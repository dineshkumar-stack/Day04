//1st step : create a XHR Object
var request = new XMLHttpRequest();
//2nd step : API URL
request.open("GET","https://restcountries.com/v2/all");
//3rd step: establishing the bridge
request.send();
//4th step: once the data successfully received from serve
//onload is an event
//when we use : once the data / serve is showing 200 status code
request.onload=function(){
    var result=JSON.parse(request.response);

    for(let i=0; i<result.length; i++){
      
       console.log("Countries Name","=",result[i].name,"/","Regions","=",result[i].region,"/","Sub-Regions","=",result[i].subregion,"/","Populations","=",result[i].population);
        
    }
}
