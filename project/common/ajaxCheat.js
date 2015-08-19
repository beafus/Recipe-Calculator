//normally I reccomend jQUERY for ajax - but if you aren't using jquery a small vanilla
//ajax library like this  (reference: http://www.w3schools.com/ajax/ )
//this only supports a success value - there are many other options left like 3XX, 4XX, 5XX

var ajax = {}; //map ajax namespace
ajax.get = function(url, callback){
    var xmlhttp;
    // compatible with IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}