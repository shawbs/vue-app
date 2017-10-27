(function(root,factory){
    'use strict';

    // 兼容AMD,CMD 和 COMMONJS
    if(typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = factory();
    }else if(typeof define !== 'undefined'){
        define(factory);
    }else{
        root.ShCalendar = factory()
    }

})(this,function(){
    'use strict';

    /**
     * 
     * 
     */
    var D = {};

    /**
     * 获取某月的天数
     * @param 年 月 string
     */
    D.getDateForYearMonth = function(year,month){
        return new Date(year,month,0).getDate();
    }


    /**
     *  获取上月在日历中的偏移数组
     * @return array
     */
    D.getDatePrevTail = function(year,month){
        var prevMonth;
        if(month == 1){
            year--;
            prevMonth = 12;
        }else{
            prevMonth = --month;
        }
        var prevPos,prevDate,posArr = [];

        var week = new Date(year,prevMonth,1).getDay();
        week = week === 0 ? 7 : week;
        prevPos = week === 1 ? 7 : --week;

        prevDate = D.getDateForYearMonth(year,prevMonth);
        for(var i = prevDate - prevPos + 1;i<= prevDate;i++){
            posArr.push({name:'prevM',value:i})
        }
        return posArr;
    }

    /**
     * 获取下月在日历中的偏移数组
     * @param array
     */ 
    D.getDateNextTail = function(year,month){
        var date = D.getDateForYearMonth(year,month);
        var prevPos = D.getDatePrevTail(year,month).length;
        var nextPos = 42 - date - prevPos;
        var posArr = [];
        for(var i = 1;i<=nextPos;i++){
            posArr.push({name:'nextM',value:i});
        }
        return posArr;
    }

    D.getToday = function(){
        return new Date().getDate();
    }

    /**
     * 生成日历数组
     * @param 年
     * @param 月
     */ 
    D.createCalendar = function(year,month){

        var yearReg = /^(1|2)+\d{3}$/;
        if(typeof year !== 'number' || !yearReg.test(year + '') || (year+'').length > 4){
            throw new Error('year format is invalid! must be a number of 1***/2*** and length is four');
        }
        
        if(typeof month !== 'number' || month <= 0 || month > 12){
            throw new Error('month must be a number between 1 and 12 !');
        }


        var calendarArr = [];
        var prevM = D.getDatePrevTail(year,month);
        var nextM = D.getDateNextTail(year,month);
        var date = D.getDateForYearMonth(year,month);
        for(var i =1;i<=date;i++){
            calendarArr.push({name:'currentM',value:i});
        }
        // console.log(prevM,calendarArr,nextM);
        return prevM.concat(calendarArr,nextM);
    }

    /**
     * 切割日历，第7个为一等份
     * @param 年
     * @param 月
     */
    D.splitCalendar = function(year,month){
        var calendarArr = D.createCalendar(year,month);
        var result = [];
        for(var i = 0,len = calendarArr.length;i<len;i+=7){
            result.push(calendarArr.slice(i,i+7));
        }
        return result;
    }

    D.init = function(config){

        var default_conf = {
            
        },options;
        
        options = _extend(default_conf,config);
        var date = new Date();
        var calendar = D.splitCalendar(date.getFullYear(),date.getMonth()+1);

        return calendar;
    }
    
    /**
     * tools
     * func
     */


    // 合并参数 
    function _extend(target,obj){
        for(var item in obj){
            target[item] = obj[item];
        }
    }


    // 英文月份转换成数字月份
    function transformMonth(month){
        var obj = {};
        var arr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        for(var i = 0; i < arr.length; i++){
            obj[arr[i]] = ++i;
        }
        return obj[month]; 
    }

    // 转换星期
    function transformWeek(week){
        var arr = ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
        return arr[week];
    }

    // 时间戳转换时间字符串
    function transformUnixtime(unixtime){
        var unixTimestamp = new Date(unixtime * 1000);
        commonTime = unixTimestamp.toString()
    }

    //时间字符串转换成时间戳
    function transformDateString(datetime){
        return Math.round(new Date().getTime()/1000);
    }

    /**
     * 时间字符串转换成 格式字符串
     * @param datetime 时间戳/时间字符串（new Date().toString）
     * @param showtime 是否显示
     */ 
    function formatDateTime(datetime,showTime,mark){
        if(typeof datetime !== 'undefined'){

            datetime = typeof datetime === 'number' ? transformUnixtime(datetime) : datetime;

            var dateArr,time,_datetime;
            // ['time','年','月', '日'] 
            dateArr = datetime.replace(/Thu?\s+/g,'').split(' ').slice(0,-2).reverse();
            dateArr[dateArr.length-1] = transformMonth(dateArr[dateArr.length-1]);
            time = dateArr.shift();
            mark = !mark ? '-' : mark;

            // 
            if(mark.search('yy:mm:dd') > -1){
                _datetime = dateArr[0] + '年' + dateArr[1] + '月' + dateArr[2] + '日';
            }else{
                _datetime = dateArr.join(mark)
            }
            return !!showTime ?  + _datetime + ' ' + time : _datetime;
        }
    }


    /**
     * 
     */
    


    return D;
})
