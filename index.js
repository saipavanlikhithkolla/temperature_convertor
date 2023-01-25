function k(l) {
    var x = document.getElementById("temp").value;
    var h = 0;
    if (x == "cel") {
      h = l * (9 / 5) + 32;
    } else {
      h = (l - 32) * (5 / 9);
    }
    document.getElementById("display").innerHTML = h;
  }