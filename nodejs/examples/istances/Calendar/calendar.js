let date = new Date;
add();

function add() {
    console.log(date);
    let cYear = date.getFullYear(); //获取日期的当前年份
    let cMonth = date.getMonth(); //获取日期的当前月份
    let cDay = date.getDate();
    let arr = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

    //获取每个月的第一天是周几
    let week = new Date(cYear, cMonth, 1).getDay();
    //获取每个月的天数
    let days = new Date(cYear, cMonth + 1, -1).getDate() + 1;

    document.getElementById('year').innerHTML = cYear;
    document.getElementById('month').innerHTML = arr[cMonth];

    let html = "";
    for (var i = 0; i < week; i++) {
        html += '<li></li>';
    }
    for (var i = 1; i <= days; i++) {
        if (i == cDay && cMonth == (new Date).getMonth() && cYear == (new Date).getFullYear()) {
            html += '<li class="active">' + i + '</li>';
        } else {
            html += '<li class="hover">' + i + '</li>';
        }
    }

    document.getElementById('date').innerHTML = html;
}

document.getElementById('prev').onclick = function() {
    date.setMonth(date.getMonth() - 1);
    add();
}

document.getElementById('next').onclick = function() {
    date.setMonth(date.getMonth() + 1);
    add();
}