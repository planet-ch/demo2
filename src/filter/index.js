export  function nowDate(date) {
    return date?new Date(date):new Date();
}
/*
    转化成时间戳 
    返回（s）秒
*/
export function timeStamp(date){
    date = Date.parse(nowDate(date));
    return date / 1000;
}
/*
    日期加减
*/
export function aroundDate(date, num){
    date = date * 1000
    date = nowDate(date);
    date.setDate(date.getDate() + num);
    return timeStamp(date);
}

export function formatDate(date, format) {
    if (!date) {
        return '-';
    }
    date = nowDate(date * 1000);
    let obj = {
        'y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    if (new RegExp("(y+)").test(format)) {
        format = format.replace(RegExp.$1, obj['y+']);
    }
    for (var j in obj) {
        if (new RegExp("(" + j + ")").test(format)) {
            format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (obj[j]) : (("00" + obj[j]).substr(("" + obj[j]).length)));
        }
    }
    return format;
}

export function stringParam(obj){
    let res= "";
    for(let k in obj){
        res+='&'+k+'='+obj[k];
    }
    return res.slice(1);
}

export function compareDate(date,date2) {
    let res = date - timeStamp(date2);
    return res >= 0 ? true: false;
}

export function parseParam(url){
    let arr = '';
    let obj = {};
    url = url || window.location.href;
    if(url.split("?").length > 1){
        arr  = url.split('?')[1].split('&');
        arr.map(item=>{
            item = item.split('=');
            let k = item[0],v = item[1];
            obj[k] = v;
        })
        return obj;
    }
}


export function substring(str) {
    return str.substring(0, 6)
}

export function speekingType(index, resourceType){ 
    let data = ['逐句跟读', '独立通读', '选段背诵'];
    if(resourceType == 'a7527f97-14e6-44ef-bf73-3039033f128e') {
        data = ['单词跟读', '单词通读'];
    }
    return data[index - 1]
}

export function disposeScore(num,count,text){
    if(num<0){
        return text;
    }else{
        return  parseFloat(parseFloat(num).toFixed(count))
    }
}
export function disposeScore2(num,count,text){
    if(num<=0){
        return '---';
    }else{
        return  parseFloat(parseFloat(num).toFixed(count)) + '%'
    }
}
export function hehe(num){
    if(num<=0){
        return '-';
    }else{
        return  num + '次'
    }
}

export function secTotime(s) {
    var t = ''
    if (s > -1) {
        var hour = Math.floor(s / 3600)
        var min = Math.floor(s / 60) % 60
        var sec = s % 60
        if (hour > 0) {
            t = hour + 'h'
        }

        if (min > 0) { t += min + 'min' }
        if (sec > 0) { t += sec + 's' }
    }
    return t !== '' ? t : '-'
}
