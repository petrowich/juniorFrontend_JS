function ch5_RangeSum() {

    console.clear();

    console.log(sum(range(1, 10)));
    console.log(range(5, 2, -1));
    console.log(range(5, 2, 1));
};

function range(x, y, step) {
    var a = [];
    step = (step == null) ? 1 : step;

    if (x > y && step > 0) {    //если начало диапазона больше окончания и шаг положительный
        step *= -1              //делаем шаг отрицательным
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



function ch5_ReverseArray() {
    console.log("не готово");
};

function ch5_List() {
    console.log("не готово");
};    

function ch5_Deep_Comparison() {
    console.log("не готово");    
};