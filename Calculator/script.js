function values(value) {
    document.getElementById("datas").value += value;
}
function calci() {
    var p = document.getElementById("datas").value;
    var q = eval(p);
    document.getElementById("datas").value = q;
}