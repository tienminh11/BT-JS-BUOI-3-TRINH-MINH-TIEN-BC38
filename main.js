// Bài 1:
function salary() {
    var salaryOfDay = document.getElementById("salaryOfDay").value * 1;
    var fullName = document.getElementById("fullName").value;
    var day = document.getElementById("day").value * 1;
    var salaryOfMonth = salaryOfDay * day;
    var total;
    total = "Lương tháng của " + fullName + " là " + salaryOfMonth;
    document.getElementById("info").innerHTML = total;
  }
  
  // Bài 2
  function average() {
    var a = document.getElementById("a").value * 1;
    var b = document.getElementById("b").value * 1;
    var c = document.getElementById("c").value * 1;
    var d = document.getElementById("d").value * 1;
    var e = document.getElementById("e").value * 1;
    var x = (a + b + c + d + e) / 5;
    var total;
    total = "Giá trị trung bình là: " + x;
    document.getElementById("info2").innerHTML = total;
  }
  
  // Bài 3
  function changeMoney() {
    var y = document.getElementById("y").value * 1;
    var Dolar = 23500;
    var total = y * Dolar;
    document.getElementById("info3").innerHTML =
      "Số tiền quy đổi ra là: " + total;
  }
  
  // Bài 4
  function calculation() {
    var f = document.getElementById("f").value * 1;
    var g = document.getElementById("g").value * 1;
    var total = "";
    var acreage = f * g;
    var perimeter = (f + g) * 2;
    total = "Diện tích là: " + acreage + ". Chu vi là: " + perimeter;
    document.getElementById("info4").innerHTML = total;
  }
  //  Bài 5
  function calculation1() {
    var m = document.getElementById("m").value * 1;
    var num1 = m % 10;
    var num2 = Math.floor(m / 10);
    var total = num1 + num2;
    document.getElementById("info5").innerHTML = "Tổng 2 chữ số là: " + total;
  }
  