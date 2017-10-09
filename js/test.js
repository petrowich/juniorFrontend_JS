function test() {

    //alert('alert test');
    
    console.clear();
    //console.log('console test');
 
    var i = {here: 1, object: 2};
    i = 8;
    i = ['A','B','C','X'];
    console.log(typeof i);
    console.log(i, numberOfProperties(i));

    function numberOfProperties(obj){
        var i=0;
        for (var n in obj){
            i++;
        }
        return i;
    }
};

