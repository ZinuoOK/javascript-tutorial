console.log('实现一个简易的计算器');

document.getElementById('btn').onclick = function () {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var op = document.getElementById('opt').value;

    if (isNaN(num1) || isNaN(num2)) {
        result = "ERROR: 输入内容不为数字或输入为空";
        flag = false;
    } else flag = true;

    if (flag) {
        switch (op) {
            case '+':
                result = "运算结果: " + num1 + " + " + num2 + " = " + (num1 + num2);
                break;
            case '-':
                result = "运算结果: " + num1 + " - " + num2 + " = " + (num1 - num2);
                break;
            case '*':
                result = "运算结果: " + num1 + " * " + num2 + " = " + (num1 * num2);
                break;
            case '/':
                if (num2 === 0) result = "输入非法，除数不能为0"
                else result = "运算结果: " + num1 + " / " + num2 + " = " + (num1 / num2);
                break;
            case '%':
                if (num2 === 0) result = "输入非法，除数不能为0"
                else result = "运算结果: " + num1 + " % " + num2 + " = " + (num1 % num2);
                break;
        }
    }
    document.getElementById('res').innerHTML = result;
}