function gauti(a) {
    var x = document.getElementById(a).value;
    var y = parseInt(x);
    return y;
}
function rodytiAtsakyma(a) {
    var x = document.getElementById('rezultatas').innerHTML;
    var bendras = x + " " + a;
    return document.getElementById('rezultatas').innerHTML = bendras;
}
function Sudeti() {
    var a = gauti('A');
    var b = gauti('B');

    sum = a + b;

    rodytiAtsakyma(sum);
}

function Atimti() {
    var a = gauti('A');
    var b = gauti('B');

    sum = a - b;

    rodytiAtsakyma(sum);
}
function Dauginti() {
    var a = gauti('A');
    var b = gauti('B');

    sum = a * b;

    rodytiAtsakyma(sum);
}
function Dalinti() {
    var a = gauti('A');
    var b = gauti('B');

    if (b === 0) {
        rodytiAtsakyma('dalyba negalima is nulio')
    }
    else {
        sum = a / b;
        rodytiAtsakyma(sum);
    }

}
function valyti () {
    document.getElementById('rezultatas').innerHTML = 'Ats.:';
}