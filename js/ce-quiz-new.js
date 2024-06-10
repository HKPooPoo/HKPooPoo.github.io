function count_mark1(element) {
    var result1 = document.getElementById("butt1")
    var mark = 0;
    if (document.getElementById('true1').checked)
    {
        mark++;
    }
    if (document.getElementById('true2').checked)
    {
        mark++;
    }
    if (document.getElementById('true3').checked)
    {
        mark++;
    }
    if (document.getElementById('true4').checked)
    {
        mark++;
    }
    if (document.getElementById('true5').checked)
    {
        mark++;
    }
    if (document.getElementById('true6').checked)
    {
        mark++;
    }
    if (document.getElementById('false1').checked)
    {
        mark = -1;
    }
    if (mark >= 0)
    {
        result1.innerText = '總分為' + mark + '分';
    } else {
        result1.innerText = '原神是吧？0分！';
    }
}