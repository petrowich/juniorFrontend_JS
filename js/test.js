﻿function test() {

    //alert('alert test');
    
    console.clear();
    //console.log('console test');
 
    var arr = ["Яблоко", "Апельсин", "Груша"];
    
    arr.forEach(function(item, i, arr) {
      alert( i + ": " + item + " (массив:" + arr + ")" );
    });

};

