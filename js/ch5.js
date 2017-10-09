function ch5_RangeSum() {

    console.clear();

    console.log(sum(range(1, 10)));
    console.log(range(5, 2, -1));
    console.log(range(5, 2, 1));
    console.log(range(1, 20, -1));
};

function range(x, y, step) {

    var a = [];
    step = (step == null) ? 1 : Math.abs(step); // делаем шаг всегда положительным

    if (x > y) {    //если начало диапазона больше окончания
        for (var i = x; i >= y; i += -1*step) { //делаем шаг отрицательным
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
    console.clear();
    console.log(reverseArray(["A", "B", "C"]));
    // → ["C", "B", "A"];
    var arrayValue = [0, 1, 2, 3, 4, 5];
    reverseArrayInPlace(arrayValue);
    console.log(arrayValue);
    // → [5, 4, 3, 2, 1]
}

function reverseArray(a) {
    var b = [];
        
    for (var i = a.length - 1; i >= 0; i--)
        b.push(a[i]);
    return b;
};

function reverseArrayInPlace(a, i) {
    if(!!!i)    //если аргумент i (индекс элемента) не указан, т.к. официально второго аргумента по условиям задачи у этой функции нет, то он 0й
        i = 0;

    var n = (a.length-1) - i; //зеркальный индекс от хвоста массива

    if (i < n) {              //если передний индекс впереди заднего - меняем значения элементов местами
        var temp = a[i];
        a[i] = a[n];
        a[n] = temp;
        return reverseArrayInPlace(a, i+1); // и рекурсивно вызываем функцию, указав вторым аргументом следующий индекс элемента
    }
    else
        return a;
}





function ch5_List() {
    console.clear();
    console.log(arrayToList([10, 20, 30]));    
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(listToArray(arrayToList([10, 20, 30])));
    // → [10, 20, 30]
    console.log(prepend(10, prepend(20, null)));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(nth(arrayToList([10, 20, 30]), 1));
    // → 20
};    

function arrayToList(a) {
    var l, r;
	for (var i = a.length - 1; i >= 0; i--) {
        r = (!!l) ? l : null;  
        l = {value: a[i], rest: r};
	}
	return l;
}


function listToArray(l) {
    var a = [];
    var r = l.rest;

	a.push(l.value);    //первое значение листа

	while (r!=null) {    //пока у текущего значения есть следующее
		a.push(r.value);
		r = r.rest;
    }
    
	return a;
}

function prepend(v, l) {
    return {value: v, rest: l};    
}


function nth(l, i) {    
    if (l==null || i < 0){  //если листа нет или индекс отрицательный, то undefined
        return undefined;
    }            
    return (i == 0) ? l.value : nth(l.rest, i - 1); //если переданный индекс не нулевой, обрабатываем следующий элемент
}



function ch5_Deep_Comparison() {
    console.clear();

    var obj = {here: {is: "an"}, object: 2};
    console.log(deepEqual(obj, obj));
    // → true
    console.log(deepEqual(obj, {here: 1, object: 2}));
    // → false
    console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
    // → true
 
    
};

function deepEqual(a, b) {

    if (a == null || b == null)
        return (a === b);

    if (typeof a == "object" && typeof b == "object"){  //если оба аргумента объекты, тогда сравниваем глубоко
        for (var ap in a){
            for (var bp in b){
                return deepEqual(a[ap], b[bp]);
            }
        }
    }        
    else return (a === b); //если не объекты, сравниваем как примитивы
}



