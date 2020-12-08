range_calc(5, 15, '+');

function range_calc(start, end, type) {
    console.log(type);
    let result;
    if ('+-*/'.indexOf(type) == -1) {
        console.log('Unsupported calculation...');
        return NaN;
    }
    else {
        console.log('Supported calculation...');
        if ('*/'.indexOf(type) == -1) result = 0;
        else result = 1;
    }
    //  
    // for (let i = start; i < end + 1; i++)
    //     eval(`result ${type}=i ;`);

    switch (type) {
        case '+':
            for (let i = start; i <= end; i++)
                result += i;
            break;
        case '-':
            for (let i = start; i <= end; i++)
                result -= i;
            break;
        case '*':
            for (let i = start; i <= end; i++)
                result *= i;
            break;
        case '/':
            for (let i = start; i <= end; i++)
                result /= i;
            break;
    }
    console.log(result);
}

//eval函数比较
// function looseJsonParse(obj) {
//     return eval(obj);
// }
// console.log(looseJsonParse(
//     `{a:(4-1), b:function(){}, c:new Date()}`
// ))

function betterJsonParse(obj) {
    return Function('"use strict";return (' + obj + ')')();
}
console.log(betterJsonParse(
    "{a:(4-1), b:function(){}, c:new Date()}"
))