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
    console.log(arrayToList([10, 20]));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(listToArray(arrayToList([10, 20, 30])));
    // → [10, 20, 30]
    console.log(prepend(10, prepend(20, null)));
    // → {value: 10, rest: {value: 20, rest: null}}
    console.log(nth(arrayToList([10, 20, 30]), 1));
    // → 20
};    

function arrayToList(arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		var nextRest = list || null;
		var list = {};

		list["value"] = arr[i];
		list["rest"] = nextRest;
	}

	return list;
}


function listToArray(list) {
	var arr = [];
	arr.push(list.value);
	var rest = list.rest;

	while (rest) {
		arr.push(rest.value);
		rest = rest["rest"];
	}

	return arr;
}


function prepend(elem, list) {
	return {value: elem, rest: list}
}


function nth(list, index) {
	if (!list.rest && index != 0) return undefined;
	return (index != 0) ? nth(list.rest, --index) : list.value;
}


function ch5_Deep_Comparison() {
    console.log("не готово");    
};