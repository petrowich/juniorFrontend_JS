function test() {

    //alert('alert test');
    
    console.clear();
    //console.log('console test');
 
    var arr = ["Яблоко", "Апельсин", "Груша"];
    console.log("("+arr+")");
    arr.forEach(function(item, i, arr) {
      console.log( i + ": " + item + " (массив:" + arr + ")" );
    });

};

