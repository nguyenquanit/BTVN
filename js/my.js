function giai_phuong_trinh_bac_nhat() {
    var a, b;
    a = +document.getElementById('a').value;
    b = +document.getElementById('b').value;
    console.log(a);
    if (a == 0) {
        if (b == 0) {
            document.getElementById('result').innerHTML = 'Vo so nghiem';
        } else {
            document.getElementById('result').innerHTML = 'Vo nghiem';
        }
    } else {
        document.getElementById('result').innerHTML = "Ngiem x = " + -b / a;
    }
}


function giai_phuong_trinh_bac_hai() {
    // code 
    var a, b, c;
    a = +document.getElementById('a2').value;
    b = +document.getElementById('b2').value;
    c = +document.getElementById('c').value;
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                document.getElementById('result2').innerHTML = 'Vo so nghiem';
            } else {
                document.getElementById('result2').innerHTML = 'Vo nghiem';
            }
        } else {
            document.getElementById('result2').innerHTML = "Ngiem x = " + -b / c;
        }
    } else {
        var delta;
        delta = b * b - 4 * a * c;

        if (delta < 0) {
            document.getElementById('result2').innerHTML = 'Vo nghiem';
        } else if (delta == 0) {
            document.getElementById('result2').innerHTML = "Ngiem kep x = " + -b / 2 * a;
        } else {
            var can_bac2_delta;
            can_bac2_delta = Math.sqrt(delta);
            document.getElementById('result2').innerHTML = "Ngiem thu 1  x = " + (-b + can_bac2_delta) / 2 * a;
            document.getElementById('result3').innerHTML = "Ngiem thu 2  x = " + (-b - can_bac2_delta) / 2 * a;
        }
    }

}