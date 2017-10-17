function ch7_VectorType() {
    console.clear();


    console.log(new Vector(1, 2).plus(new Vector(2, 3)));
    // → Vector{x: 3, y: 5}
    console.log(new Vector(1, 2).minus(new Vector(2, 3)));
    // → Vector{x: -1, y: -1}
    console.log(new Vector(3, 4).length);
    // → 5

}

function ch7_AnotherCell() {
    console.clear();

    var sc = new StretchCell(new TextCell("abc"), 1, 2);
    console.log(sc.minWidth());
    // → 3
    console.log(sc.minHeight());
    // → 2
    console.log(sc.draw(3, 2));
    // → ["abc", "   "]
}

function ch7_ArraySequence() {
    console.clear();

    logFive(new ArraySeq([1, 2]));
    // → 1
    // → 2
    logFive(new RangeSeq(100, 1000));
    // → 100
    // → 101
    // → 102
    // → 103
    // → 104
}