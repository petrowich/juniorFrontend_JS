function ch5_RangeSum() {

    console.clear();

    console.log(sum(range(1, 10)));
    console.log(range(5, 2, -1));
    console.log(range(5, 2, 1));
    console.log(range(1, 20, -1));
};

function range(x, y, step) {
    var a = [];
    step = (step == null) ? 1 : Math.abs(step); // делаем шаг положительным

    if (x > y) {    //если начало диапазона больше окончания
        step = -1*Math.abs(step);             //делаем шаг отрицательным
    } 


    if (step < 0) {
        for (var i = x; i >= y; i += step) {
            a.push(i);
        }
    } else {
        for (var i = x; i <= y; i += step) {
            a.push(i);
        }
    }
    
    return a
}

function sum(a) {
    var total = 0;
    for (var i = 0; i < a.length; i++)
      total += a[i];
    return total;
  }


function ch5_ReverseArray(a) {
    console.log(ReverseArray(["A", "B", "C"]));
    console.log(reverseArrayInPlace(["A", "B", "C", "D", "E", "F", "G", "H"]));
}

function ReverseArray(a) {
    var b = [];
        
    for (var i = a.length - 1; i >= 0; i--)
        b.push(a[i]);
    return b;
};

function reverseArrayInPlace(arr, i) {
    if(!!!i)    //если аргумент i(индекс массива) не указан
        i = 0;

    var n = (arr.length-1) - i;

    console.log(i, n);

    if ((n-i)>1) {
        var temp = arr[i];
        arr[i] = arr[n];
        arr[n] = temp;
        return reverseArrayInPlace(arr, i+1);
    }
    else
        return arr;    
}




function ch5_List() {
    console.log("не готово");
};    

function ch5_Deep_Comparison() {
    console.log("не готово");    
};