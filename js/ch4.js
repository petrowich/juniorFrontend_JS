function ch4_Minimum(x, y) {
    x = parseInt(prompt("первое число:"));
    y = parseInt(prompt("второе число:"));
    console.log("минимальное число: " + f_Minimum(x, y));
};

function f_Minimum(x, y) {
    return(x < y) ? x : y;
};



function ch4_Recursion() {
    console.clear();
    n = parseInt(prompt());
    console.log(isEven(n));
};

function isEven(n) {
    n = (n < 0) ? n * -1 : n ; //исправляем знак
	return (n == 0) ? true : (n == 1) ? false : isEven(n - 2);
}



function ch4_Count() {
    console.clear();

    var str = prompt("строка");
    var char = prompt("ищем символ").charAt(0);

    console.log("кол-во символов 'B' в строке " + countBs(str));
    console.log("кол-во символов '"+char+"' в строке " + countChar(str,char)); //применяем вторую функцию, где 
};

function countBs(str) {
    /*
    var n = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charAt(i) == "B")
            n++        
    }
    return n;
    */
    return (countChar(str, "B"));
}

function countChar(str, char) {
	var n = 0;

	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) == char)
			n++;
    }    
	return n;
}

