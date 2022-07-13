let res = "";
let buttons = document.querySelectorAll('.btn,.bigbtn');
let screen = document.getElementById('screen');

// let scientificstring = sincostanlogRad;
for (item of buttons) {
    item.addEventListener('click', (ele) => {
        buttonText = ele.target.innerText;
        let lastletter = res.slice(-1);
        // if (res == "0" || res == "Syntax Error") {
        //     res = "";
        // }
        if (buttonText == 'AC') {
            res = "";
            screen.value = res;
        }
        else if ( ((lastletter == ')')  || (!isNaN(lastletter))) && (buttonText == '(') && res.length >= 1) {
            res = res + "*" + buttonText;
            screen.value = res;
        }
        else if (buttonText == "=") {
            let lastletter = res.slice(-1);
            if ((lastletter == '+') || (lastletter == '-') || (lastletter == '*') || (lastletter == '%') || (lastletter == '/') || (lastletter == '(')) {
                res = "Syntax Error";
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
        else if ((buttonText == 'sin') || (buttonText == 'tan') || (buttonText == 'cos') || (buttonText == 'log') || (buttonText == '√') || (buttonText == 'Rad') || (buttonText == 'asin') || (buttonText == 'atan') || (buttonText == 'acos')  ) {
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

        else if ((buttonText == '+') || (buttonText == '*') || (buttonText == '-') || (buttonText == '%') || (buttonText == '/')) {
            let lastletter = res.slice(-1);
            console.log(lastletter);
            let lasttwochar = res.slice(-2);
            // if((buttonText == '-') && (res == ""))
            // {
            //     res += buttonText;
            //     screen.value =  res;
            // }
            if ((buttonText == '-') && isNaN(lastletter)) {
                res = res + "(" + buttonText;
                screen.value = res;
            }
            else if ((lastletter == '-') && (buttonText == '-')) {
                res += buttonText;
                screen.value = res;
            }
            else if ((lastletter == '+') || (lastletter == '-') || (lastletter == '*') || (lastletter == '%') || (lastletter == '/') || (lastletter == '')) {
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

function syntaxError() {
    if (eval(display.value) == SyntaxError || eval(display.value) == ReferenceError || eval(display.value) == TypeError) {
        screen.value == "Syntax Error";
    }
}

function evaluation() {
    let text = res;
    if (text.includes("asin")) {
        let pre = "";
        let post = "";
        let mid = "";

        let ind = text.indexOf("asin(");
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
        console.log(Math.asin(mid));
        let exp = (pre + Math.asin(mid) + post);
        console.log(exp);
        let flag = 0;
        if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√"))  || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) ) {
            res = exp;
            flag = 1;
            evaluation();
        }
        else if (pre != "" && post != "") {
            res = eval((pre + (Math.asin(mid, 2)) + post));
            screen.value = res;
        } else if (pre != "") {
            res = eval((pre + (Math.asin(mid, 2))));
            screen.value = res;
        }
        else if (post != "") {
            res = eval(((Math.asin(mid, 2)) + post));
            screen.value = res;
        } else {
            res = eval((Math.asin(mid, 2)));
            screen.value = res;
        }
    }
    else if (text.includes("acos")) {
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
        if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√"))  || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) ) {
            res = exp;
            flag = 1;
            evaluation();
        }
        else if (pre != "" && post != "") {
            res = eval((pre + (Math.acos(mid, 2)) + post));
            screen.value = res;
        } else if (pre != "") {
            res = eval((pre + (Math.acos(mid, 2))));
            screen.value = res;
        }
        else if (post != "") {
            res = eval(((Math.acos(mid, 2)) + post));
            screen.value = res;
        } else {
            res = eval((Math.acos(mid, 2)));
            screen.value = res;
        }
    }
    else if (text.includes("atan")) {
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
        if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√")) || (exp.includes("atan(")) || (exp.includes("asin(")) || (exp.includes("acos")) ) {
            res = exp;
            flag = 1;
            evaluation();
        }
        else if (pre != "" && post != "") {
            res = eval((pre + (Math.atan(mid, 2)) + post));
            screen.value = res;
        } else if (pre != "") {
            res = eval((pre + (Math.atan(mid, 2))));
            screen.value = res;
        }
        else if (post != "") {
            res = eval(((Math.atan(mid, 2)) + post));
            screen.value = res;
        } else {
            res = eval((Math.atan(mid, 2)));
            screen.value = res;
        }
    }
    else if (text.includes("sin")) {
        let pre = "";
        let post = "";
        let mid = "";

        let ind = text.indexOf("sin(");
        pre = text.slice(0, ind);
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
        console.log(Math.sin(mid));
        let exp = (pre + Math.sin(mid) + post);
        console.log(exp);
        let flag = 0;
        if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√"))) {
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
    else if (text.includes("cos")) {
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
        if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√"))) {
            res = exp;
            flag = 1;
            evaluation();
        }
        else if (pre != "" && post != "") {
            res = eval((pre + (Math.cos(mid, 2)) + post));
            screen.value = res;
        } else if (pre != "") {
            res = eval((pre + (Math.cos(mid, 2))));
            screen.value = res;
        }
        else if (post != "") {
            res = eval(((Math.cos(mid, 2)) + post));
            screen.value = res;
        } else {
            res = eval((Math.cos(mid, 2)));
            screen.value = res;
        }
    }
    else if (text.includes("tan")) {
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
        if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√"))) {
            res = exp;
            flag = 1;
            evaluation();
        }
        else if (pre != "" && post != "") {
            res = eval((pre + (Math.tan(mid, 2)) + post));
            screen.value = res;
        } else if (pre != "") {
            res = eval((pre + (Math.tan(mid, 2))));
            screen.value = res;
        }
        else if (post != "") {
            res = eval(((Math.tan(mid, 2)) + post));
            screen.value = res;
        } else {
            res = eval((Math.tan(mid, 2)));
            screen.value = res;
        }
    }
    else if (text.includes("√")) {
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
        console.log(i);
        while (text.charAt(i) == ')' && i < text.length) {
            i++;
        }
        post = text.slice(i,);
        console.log(pre);
        console.log(post);
        console.log(Math.sqrt(mid, 2));
        let exp = (pre + Math.sqrt(mid, 2) + post);
        console.log(exp);
        let flag = 0;
        if ((exp.includes("tan(")) || (exp.includes("sin(")) || (exp.includes("cos")) || (exp.includes("√"))) {
            res = exp;
            flag = 1;
            evaluation();
        }
        else if (pre != "" && post != "") {
            res = eval((pre + (Math.sqrt(mid, 2)) + post));
            screen.value = res;
        } else if (pre != "") {
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

function sin() {
    screen.value = Math.asin(screen.value);
}
// function cos() {
//     screen.value = Math.cos(screen.value);
// }
// function tan() {
//     screen.value = Math.tan(screen.value);
// }
// function rad() {
//     screen.value = Math.rad(screen.value);
// }
// function log() {
//     screen.value = Math.log(screen.value, 2);
// }
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
function e() {
    let temp = res.substr(res.length - 1, res.length);
    if (!isNaN(temp)) {
        res += " * 2.71828182846";
        screen.value = res;
    }
    else {
        res += 2.71828182846;
        screen.value = res;
    }
}
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}
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