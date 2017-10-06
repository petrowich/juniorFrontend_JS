function ch3_Triangle() {
    console.clear();

    var str = "#"
    
    for (var i = 1; i <= 7; i++) {       
        console.log(str);
        str += "#";
    }
};


function ch3_FizzBuzz() {
    console.clear();

    var str;
    for (var i = 1; i <= 100; i++) {      
        
        str = "";
        
        if (i % 3 == 0)
            str = "Fizz";

        if (i % 5 == 0)
            str += "Buzz";

        if (str.length == 0) 
            str = i;
    
        console.log(str);
    }

};


function ch3_ChessBoard() {
    console.clear();

    var str='';
    
        for (var x = 0; x < 8; x++) {     
            for (var y = 0; y < 8; y++) {    
                if ((x+y) % 2 != 0) 
                    str +=	"#";
                else
                    str +=	" ";
                }
            console.log(str);
            str = "";
        }        
};
