let res = "";
let buttons = document.querySelectorAll('.btn,.bigbtn');
let screen = document.getElementById('screen');

// let scientificstring = sincostanlogRad;
// ----------------------------------------INPUT SCREEN----------------------
for (item of buttons) {
    item.addEventListener('click', (ele) => {
        buttonText = ele.target.innerText;
        let lastletter = res.slice(-1);
        // if (res == "0" || res == "Syntax Error") {
        //     res = "";
        // }
        if (buttonText == 'pow') {
            if ((res != "") && (!isNaN(lastletter))) {
                res += "**";
                screen.value = res;
            }
            else {
                res = res;
                screen.value = res;
            }
        }
        else if (buttonText == 'AC') {
            res = "";
            screen.value = res;
        }
        else if (((lastletter == ')') || (!isNaN(lastletter))) && (buttonText == '(') && res.length >= 1) {
            res = res + "*" + buttonText;
            screen.value = res;
        }
        else if (buttonText == "=") {
            let lastletter = res.slice(-1);
            if ((lastletter == '+') || (lastletter == '-') || (lastletter == '*') || (lastletter == '%') || (lastletter == '/') || (lastletter == '(') || (lastletter == '.') || (lastletter == '**')) {
                res = "Syntax Error";
                // res = res;
                screen.value = res;
                // syntaxError();
            }
            else {
                evaluation();
            }
            res = "";
        }
        else if (buttonText == "CE") {
            res = res.substr(0, res.length - 1);
            screen.value = res;
        }
        else if ((buttonText == 'sin') || (buttonText == 'tan') || (buttonText == 'cos') || (buttonText == 'log') || (buttonText == '√') || (buttonText == 'Rad') || (buttonText == 'asin') || (buttonText == 'atan') || (buttonText == 'acos') || (buttonText == 'exp') || (buttonText == 'deg')) {
            let temp = res.substr(res.length - 1, res.length);
            if (((!isNaN(temp)) || temp == ')') && (res != "")) {
                res = res + "*" + buttonText + '(';
                screen.value = res;
            }
            else {
                res += buttonText + '(';
                screen.value = res;
            }
        }

        else if ((buttonText == '+') || (buttonText == '*') || (buttonText == '-') || (buttonText == '%') || (buttonText == '/') || (buttonText == ')')) {
            let lastletter = res.slice(-1);
            console.log(lastletter);
            let lasttwochar = res.slice(-2);
            // if((buttonText == '-') && (res == ""))
            // {
            //     res += buttonText;
            //     screen.value =  res;
            // }
            if ((buttonText == '-') && isNaN(lastletter) && (lasttwochar != '(-')) {
                res = res + "(" + buttonText;
                screen.value = res;
            }
            // else if ((lastletter == '-') && (buttonText == '-')) {
            //     res += buttonText;
            //     screen.value = res;
            // }
            else if ((lastletter == '+') || (lastletter == '-') || (lastletter == '*') || (lastletter == '%') || (lastletter == '/') || (lastletter == '') || (lastletter == '(')) {
                // res = "Not possible";
                // screen.value = res;
                screen.value = res;
            }
            else {
                res += buttonText;
                screen.value = res;
            }
        }
        else {
            res += buttonText;
            screen.value = res;
        }
    })
}

// -----------------------------------ON EVALUATING IF SYNTAX ERROR OCCURS------------------------
function syntaxError() {
    if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
        screen.value == "Syntax Error";
    }
}

// -------------------------------EVALUATION FO ALL TRIGO FUCNTIONS-------------------------
function evaluation() {
    let text = res;
    if (text.includes("asin")) {
        asin();
    }
    else if (text.includes("acos")) {
        acos();
    }
    else if (text.includes("atan")) {
        atan();
    }
    else if (text.includes("sin")) {
        sin();
    }
    else if (text.includes("cos")) {
        cos();
    }
    else if (text.includes("tan")) {
        tan();
    }
    else if (text.includes("log")) {
        logarithm();
    }
    else if (text.includes("exp")) {
        exponential();
    }
    else if (text.includes("Rad")) {
        deg_into_radian();
    }
    else if (text.includes("deg")) {
        rad_into_deg();
    }
    else if (text.includes("√")) {
        sqrrt();
    }
    else {
        res = eval(res);
        if ((res == SyntaxError) || (res == ReferenceError) || (res == TypeError)) {
            screen.value == "Syntax Error";
        }
        else {
            console.log("result", screen.value);
            screen.value = res;
        }
    }
}

// --------------------------------ASIN CAN TAKE ONLY 0-1 --------------------
function asin() {
    let text = res;
    let pre = "";
    let post = "";
    let mid = "";

    let ind = text.indexOf("asin(");
    pre = text.slice(0, ind);
    // let count ;
    let i;
    for (i = ind + 5; text.charAt(i) != ')' && i < text.length; i++) {
        // if (text.charAt(i) == '(') {
        //     // para++;
        //     continue;
        // }
        // else {
        mid += text.slice(i, i + 1);
        // }
    }
    // if (text.includes(')')) {
    //     let lastind = text.lastIndexOf(')');
    //     post = text.slice(lastind + 1,);
    // }

    console.log(i);
    console.log(pre);
    console.log(mid);
    while (text.charAt(i) == ')' && i < text.length) {
        i++;
    }
    post = text.slice(i,);
    console.log(post);

    // if (mid.includes("asin(")) {
    //     asin();
    // }
    // if (mid.includes("acos(")) {
    //     acos();
    // }
    // if (mid.includes("atan(")) {
    //     atan();
    // }
    // if (mid.includes("sin(")) {
    //     sin();
    // }
    // if (mid.includes("cos(")) {
    //     console.log("result", mid);
    //     cos();
    // }
    // if (mid.includes("tan(")) {
    //     tan();
    // }
    // if (mid.includes("deg(")) {
    //     rad_into_deg();
    // }
    // if (mid.includes("Rad(")) {
    //     deg_into_radian();
    // }
    // if (mid.includes("exp(")) {
    //     exponential();
    // }
    // if (mid.includes("log(")) {
    //     logarithm();
    // }
    // if (mid.includes('(')) {
    //     let midtemp;
    //     for (let i = 0; i < mid.length; i++) {
    //         midtemp += mid.slice(i, i + 1);
    //     }
    //     mid = midtemp;
    // }

    console.log(Math.asin(mid));
    let exp = (pre + Math.asin(mid) + post);
    console.log(exp);
    let flag = 0;
    if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√")) || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) || (exp.includes("deg")) || (exp.includes("Rad")) || (exp.includes("exp")) || (exp.includes("log"))) {
        res = exp;
        flag = 1;
        evaluation();
    }
    else if (pre != "" && post != "") {
        res = eval((pre + (Math.asin(mid)) + post));
        screen.value = res;
    } else if (pre != "") {
        res = eval((pre + (Math.asin(mid))));
        screen.value = res;
    }
    else if (post != "") {
        res = eval(((Math.asin(mid)) + post));
        screen.value = res;
    } else {
        res = eval((Math.asin(mid)));
        screen.value = res;
    }
}

function acos() {
    let text = res;
    let pre = "";
    let post = "";
    let mid = "";

    let ind = text.indexOf("acos(");
    pre = text.slice(0, ind);
    // let count ;
    let i;
    for (i = ind + 5; text.charAt(i) != ')' && i < text.length; i++) {
        if (text.charAt(i) == '(') {
            // para++;
            continue;
        }
        else {
            mid += text.slice(i, i + 1);
        }
    }
    // if (text.includes(')')) {
    //     let lastind = text.lastIndexOf(')');
    //     post = text.slice(lastind + 1,);
    // }

    console.log(i);
    while (text.charAt(i) == ')' && i < text.length) {
        i++;
    }
    post = text.slice(i,);
    console.log(pre);
    console.log(post);
    console.log(Math.acos(mid));
    let exp = (pre + Math.acos(mid) + post);
    console.log(exp);
    let flag = 0;
    if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√")) || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) || (exp.includes("deg")) || (exp.includes("Rad")) || (exp.includes("exp")) || (exp.includes("log"))) {
        res = exp;
        flag = 1;
        evaluation();
    }
    else if (pre != "" && post != "") {
        res = eval((pre + (Math.acos(mid)) + post));
        screen.value = res;
    } else if (pre != "") {
        res = eval((pre + (Math.acos(mid))));
        screen.value = res;
    }
    else if (post != "") {
        res = eval(((Math.acos(mid)) + post));
        screen.value = res;
    } else {
        res = eval((Math.acos(mid)));
        screen.value = res;
    }
}

function atan() {
    let text = res;
    let pre = "";
    let post = "";
    let mid = "";

    let ind = text.indexOf("atan(");
    pre = text.slice(0, ind);
    // let count ;
    let i;
    for (i = ind + 5; text.charAt(i) != ')' && i < text.length; i++) {
        if (text.charAt(i) == '(') {
            // para++;
            continue;
        }
        else {
            mid += text.slice(i, i + 1);
        }
    }
    // if (text.includes(')')) {
    //     let lastind = text.lastIndexOf(')');
    //     post = text.slice(lastind + 1,);
    // }

    console.log(i);
    while (text.charAt(i) == ')' && i < text.length) {
        i++;
    }
    post = text.slice(i,);
    console.log(pre);
    console.log(post);
    console.log(Math.atan(mid));
    let exp = (pre + Math.atan(mid) + post);
    console.log(exp);
    let flag = 0;
    if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√")) || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) || (exp.includes("deg")) || (exp.includes("Rad")) || (exp.includes("exp")) || (exp.includes("log"))) {
        res = exp;
        flag = 1;
        evaluation();
    }
    else if (pre != "" && post != "") {
        res = eval((pre + (Math.atan(mid)) + post));
        screen.value = res;
    } else if (pre != "") {
        res = eval((pre + (Math.atan(mid))));
        screen.value = res;
    }
    else if (post != "") {
        res = eval(((Math.atan(mid)) + post));
        screen.value = res;
    } else {
        res = eval((Math.atan(mid)));
        screen.value = res;
    }
}

function sin() {
    let text = res;
    let pre = "";
    let post = "";
    let mid = "";

    let ind = text.indexOf("sin(");
    pre = text.slice(0, ind);
    let para = 0;
    let rightpara = 0;
    let i;
    for (i = ind + 4; para != rightpara && i < text.length; i++) {
        if (text.charAt(i) == '(') {
            // para++;
            continue;
        }
        // else if(text.charAt(i) == ')')
        // {
        //     rightpara ++;
        // }
        else {
            mid += text.slice(i, i + 1);
        }
    }
    // if (text.includes(')')) {
    //     let lastind = text.lastIndexOf(')');
    //     post = text.slice(lastind + 1,);
    // }

    console.log(i);
    while (text.charAt(i) == ')' && i < text.length) {
        i++;
    }
    post = text.slice(i,);
    console.log(mid);
    console.log(post);
    console.log(Math.sin(mid));
    let exp = (pre + Math.sin(mid) + post);
    console.log(exp);
    let flag = 0;
    if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√")) || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) || (exp.includes("deg")) || (exp.includes("Rad")) || (exp.includes("exp")) || (exp.includes("log"))) {
        res = exp;
        flag = 1;
        evaluation();
    }
    else if (pre != "" && post != "") {
        res = eval((pre + (Math.sin(mid, 2)) + post));
        screen.value = res;
    } else if (pre != "") {
        res = eval((pre + (Math.sin(mid, 2))));
        screen.value = res;
    }
    else if (post != "") {
        res = eval(((Math.sin(mid, 2)) + post));
        screen.value = res;
    } else {
        res = eval((Math.sin(mid, 2)));
        screen.value = res;
    }

}

function cos() {
    let text = res;
    let pre = "";
    let post = "";
    let mid = "";
    let ind = text.indexOf("cos(");
    pre = text.slice(0, ind);
    // let count ;
    let i;
    for (i = ind + 4; text.charAt(i) != ')' && i < text.length; i++) {
        if (text.charAt(i) == '(') {
            continue;
        }
        else {
            mid += text.slice(i, i + 1);
        }
    }
    console.log(i);
    while (text.charAt(i) == ')' && i < text.length) {
        i++;
    }
    post = text.slice(i,);
    console.log(pre);
    console.log(post);
    console.log(Math.cos(mid));
    let exp = (pre + Math.cos(mid) + post);
    console.log(exp);
    let flag = 0;
    if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√")) || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) || (exp.includes("deg")) || (exp.includes("Rad")) || (exp.includes("exp")) || (exp.includes("log"))) {
        res = exp;
        flag = 1;
        evaluation();
    }
    else if (pre != "" && post != "") {
        res = eval((pre + (Math.cos(mid)) + post));
        screen.value = res;
    } else if (pre != "") {
        res = eval((pre + (Math.cos(mid))));
        screen.value = res;
    }
    else if (post != "") {
        res = eval(((Math.cos(mid)) + post));
        screen.value = res;
    } else {
        res = eval((Math.cos(mid)));
        screen.value = res;
    }
}

function tan() {
    let text = res;
    let pre = "";
    let post = "";
    let mid = "";

    let ind = text.indexOf("tan(");
    pre += text.slice(0, ind);
    // let count ;
    let i;
    for (i = ind + 4; text.charAt(i) != ')' && i < text.length; i++) {
        if (text.charAt(i) == '(') {
            // para++;
            continue;
        }
        else {
            mid += text.slice(i, i + 1);
        }
    }
    console.log(i);
    while (text.charAt(i) == ')' && i < text.length) {
        i++;
    }
    post = text.slice(i,);
    console.log(pre);
    console.log(post);
    console.log(Math.tan(mid));
    let exp = (pre + Math.tan(mid) + post);
    console.log(exp);
    let flag = 0;
    if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√")) || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) || (exp.includes("deg")) || (exp.includes("Rad")) || (exp.includes("exp")) || (exp.includes("log"))) {
        res = exp;
        flag = 1;
        evaluation();
    }
    else if (pre != "" && post != "") {
        res = eval((pre + (Math.tan(mid)) + post));
        screen.value = res;
    } else if (pre != "") {
        res = eval((pre + (Math.tan(mid))));
        screen.value = res;
    }
    else if (post != "") {
        res = eval(((Math.tan(mid)) + post));
        screen.value = res;
    } else {
        res = eval((Math.tan(mid)));
        screen.value = res;
    }
}

// -----------------------------LOG OF ANY NUMBER-------------------------
function logarithm() {
    let text = res;
    let pre = "";
    let post = "";
    let mid = "";

    let ind = text.indexOf("log(");
    pre += text.slice(0, ind);
    // let count ;
    let i;
    for (i = ind + 4; text.charAt(i) != ')' && i < text.length; i++) {
        if (text.charAt(i) == '(') {
            // para++;
            continue;
        }
        else {
            mid += text.slice(i, i + 1);
        }
    }
    console.log(i);
    while (text.charAt(i) == ')' && i < text.length) {
        i++;
    }
    post = text.slice(i,);
    console.log(pre);
    console.log(post);
    console.log(Math.log(mid));
    let exp = (pre + Math.log(mid) + post);
    console.log(exp);
    let flag = 0;
    if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√")) || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) || (exp.includes("deg")) || (exp.includes("Rad")) || (exp.includes("exp")) || (exp.includes("log"))) {
        res = exp;
        flag = 1;
        evaluation();
    }
    else if (pre != "" && post != "") {
        res = eval((pre + (Math.log(mid)) + post));
        screen.value = res;
    } else if (pre != "") {
        res = eval((pre + (Math.log(mid))));
        screen.value = res;
    }
    else if (post != "") {
        res = eval(((Math.log(mid)) + post));
        screen.value = res;
    } else {
        res = eval((Math.log(mid)));
        screen.value = res;
    }
}

// -------------------------------EXPONENTIAL FUNCTION-=-----------------------
function exponential() {
    let text = res;
    let pre = "";
    let post = "";
    let mid = "";

    let ind = text.indexOf("exp(");
    pre += text.slice(0, ind);
    // let count ;
    let i;
    for (i = ind + 4; text.charAt(i) != ')' && i < text.length; i++) {
        if (text.charAt(i) == '(') {
            // para++;
            continue;
        }
        else {
            mid += text.slice(i, i + 1);
        }
    }
    console.log(i);
    while (text.charAt(i) == ')' && i < text.length) {
        i++;
    }
    post = text.slice(i,);
    console.log(pre);
    console.log(post);
    console.log(Math.exp(mid));
    let exp = (pre + Math.exp(mid) + post);
    console.log(exp);
    let flag = 0;
    if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√")) || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) || (exp.includes("deg")) || (exp.includes("Rad")) || (exp.includes("exp")) || (exp.includes("log"))) {
        res = exp;
        flag = 1;
        evaluation();
    }
    else if (pre != "" && post != "") {
        res = eval((pre + (Math.exp(mid)) + post));
        screen.value = res;
    } else if (pre != "") {
        res = eval((pre + (Math.exp(mid))));
        screen.value = res;
    }
    else if (post != "") {
        res = eval(((Math.exp(mid)) + post));
        screen.value = res;
    } else {
        res = eval((Math.exp(mid)));
        screen.value = res;
    }
}

// --------------------------------------CONVERTING DEGREE INTO RADIAN--------------------------
function deg_into_radian() {
    let text = res;
    let pre = "";
    let post = "";
    let mid = "";

    let ind = text.indexOf("Rad(");
    pre += text.slice(0, ind);
    // let count ;
    let i;
    for (i = ind + 4; text.charAt(i) != ')' && i < text.length; i++) {
        if (text.charAt(i) == '(') {
            // para++;
            continue;
        }
        else {
            mid += text.slice(i, i + 1);
        }
    }
    console.log(i);
    while (text.charAt(i) == ')' && i < text.length) {
        i++;
    }
    post = text.slice(i,);
    // console.log(pre);
    // console.log(post);
    // console.log(Math.tan(mid));
    // console.log(exp);

    // if((mid.includes("tan(")) || (mid.includes("sin(")) || (mid.includes("cos")) || (mid.includes("√")))
    // {
    //     evaluation();
    // }
    var pi = Math.PI;
    var radian = eval(mid);
    var radres = (radian) * (180 / pi);
    let flag = 0;

    let exp = (pre + radres + post);
    if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√")) || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) || (exp.includes("deg")) || (exp.includes("Rad")) || (exp.includes("exp")) || (exp.includes("log"))) {
        res = exp;
        flag = 1;
        evaluation();
    }
    else if (pre != "" && post != "") {
        res = eval((pre + (radres)) + post);
        screen.value = res;
    } else if (pre != "") {
        res = eval((pre + (radres)));
        screen.value = res;
    }
    else if (post != "") {
        res = eval(((radres)) + post);
        screen.value = res;
    } else {
        res = eval((radres));
        screen.value = res;
    }
}

// ----------------------------------CONERTING RADIAN INTO DEGREE-----------------------
function rad_into_deg() {
    let text = res;
    let pre = "";
    let post = "";
    let mid = "";

    let ind = text.indexOf("deg(");
    pre += text.slice(0, ind);
    // let count ;
    let i;
    for (i = ind + 4; text.charAt(i) != ')' && i < text.length; i++) {
        if (text.charAt(i) == '(') {
            // para++;
            continue;
        }
        else {
            mid += text.slice(i, i + 1);
        }
    }
    console.log(i);
    while (text.charAt(i) == ')' && i < text.length) {
        i++;
    }
    post = text.slice(i,);
    // console.log(pre);
    // console.log(post);
    // console.log(Math.tan(mid));
    // console.log(exp);

    var pi = Math.PI;
    var degree = eval(mid);
    var degres = (degree) * (pi / 180);
    let flag = 0;


    let exp = (pre + degres + post);
    if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√")) || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) || (exp.includes("deg")) || (exp.includes("Rad")) || (exp.includes("exp")) || (exp.includes("log"))) {
        res = exp;
        flag = 1;
        evaluation();
    }
    else if (pre != "" && post != "") {
        res = eval((pre + (degres)) + post);
        screen.value = res;
    } else if (pre != "") {
        res = eval((pre + (degres)));
        screen.value = res;
    }
    else if (post != "") {
        res = eval(((degres)) + post);
        screen.value = res;
    } else {
        res = eval((degres));
        screen.value = res;
    }

}

// ---------------------------------SQUARE ROOT OF ANY Function(INPUT)--------------------
function sqrrt() {
    let text = res;
    console.log("square root");
    let pre = "";
    let post = "";
    let mid = "";

    let ind = text.indexOf("√");
    pre += text.slice(0, ind);
    // let count ;
    let i;
    for (i = ind + 1; text.charAt(i) != ')' && i < text.length; i++) {
        if (text.charAt(i) == '(') {
            // para++;
            continue;
        }
        else {
            mid += text.slice(i, i + 1);
        }
    }
    // console.log(i);
    while (text.charAt(i) == ')' && i < text.length) {
        i++;
    }
    post = text.slice(i,);
    // console.log(pre);
    // console.log(post);
    // console.log(Math.sqrt(mid, 2));
    mid = eval(mid);
    let exp = (pre + Math.sqrt(mid, 2) + post);
    // console.log(exp);
    let flag = 0;
    if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√")) || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) || (exp.includes("deg")) || (exp.includes("Rad")) || (exp.includes("exp")) || (exp.includes("log"))) {
        res = exp;
        flag = 1;
        evaluation();
    }
    else if (pre != "" && post != "") {
        res = eval((pre + (Math.sqrt(mid, 2)) + post));
        screen.value = res;
    }
    else if (pre != "") {
        res = eval((pre + (Math.sqrt(mid, 2))));
        screen.value = res;
    }
    else if (post != "") {
        res = eval(((Math.sqrt(mid, 2)) + post));
        screen.value = res;
    } else {
        res = eval((Math.sqrt(mid, 2)));
        screen.value = res;
    }
}

// --------------------------PI=3.1444------------------
function pi() {
    let temp = res.substr(res.length - 1, res.length);
    if (!isNaN(temp)) {
        res += " * 3.14159265359";
        screen.value = res;
    }
    else {
        res += 3.14159265359;
        screen.value = res;
    }
}
// function sqrt() {
//     res = Math.sqrt(screen.value, 2);
//     screen.value = res;
// }

// ----------------------------FACTORIAL OF ANY NUMBER-----------------------
function fact() {
    let i, fac, num;
    fac = 1;
    num = screen.value;
    for (i = 1; i <= num; i++) {
        fac = fac * i;
    }
    i = i - 1;
    screen.value = fac;
}
