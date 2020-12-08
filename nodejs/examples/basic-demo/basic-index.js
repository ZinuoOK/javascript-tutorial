range_calc(5, 15, '+');

console.log( );
function range_calc(start, end, type) {
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
    for (let i = start; i < end + 1; i++)
        eval(`result ${type}=i ;`);

    console.log(`The result of operator ${type} action from ${start} to ${end} = ${result}`);

    return result;
}

let returned = null;

// range_calc(1, 10, '+');
// range_calc(1, 10, '-');