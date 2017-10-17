function test() {

    //alert('alert test');
    
    console.clear();
    //console.log('console test');
 
    function bind(func, context) {
      return function() { // (*)
        return func.apply(context, arguments);
      };
    }

    function f() {
      console.log( this );
    }
    
    var g = bind(f, 'Context');
    g.call();
    g.apply();
    g(); // Context

};

