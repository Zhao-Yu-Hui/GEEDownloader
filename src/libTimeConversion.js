var checkParam = require('users/zhaoyuhui012/libs:libParamInspector')

function convertTimestamp2Str(
    sys_time, 
    str_format
    ) {
    if (str_format === undefined) {
        str_format = '%Y-%m-%d';
    }
    
    checkParam.checkParam(sys_time, 'sys_time', 'number')
    checkParam.checkParam(str_format, 'str_format', 'string')
    
    var time_start_date = new Date(sys_time);
    var year = time_start_date.getFullYear();
    var month = (time_start_date.getMonth()+1 < 10 ? 
        '0' + (time_start_date.getMonth()+1) : time_start_date.getMonth()+1);
    var date = time_start_date.getDate() < 10 ? 
        '0' + time_start_date.getDate() : time_start_date.getDate();
    var hour = time_start_date.getHours() < 10 ?
        '0' + time_start_date.getHours() : time_start_date.getHours();
    var minute = time_start_date.getMinutes() < 10 ? 
        '0' + time_start_date.getMinutes() : time_start_date.getMinutes();
    var second = time_start_date.getSeconds() < 10 ?
        '0' + time_start_date.getSeconds() : time_start_date.getSeconds();
    
    var rtn = str_format
        .replace('%Y', year)
        .replace('%m', month)
        .replace('%d', date)
        .replace('%H', hour)
        .replace('%M', minute)
        .replace('%S', second)
        .replace('%%', '%');
    
    return rtn;
        
}
exports.convertTimestamp2Str = convertTimestamp2Str

/*
// Test
var test_time_date = new Date('2000-01-02 03:04:56');
var test_time = test_time_date.getTime();
print(convertTimestamp2Str(test_time)); // 2000-01-02
print(convertTimestamp2Str(test_time, "%Y-%m-%d %H:%M:%S%%"));  // 2000-01-02 03:04:56%
print(convertTimestamp2Str("2000-01-02")); // err
print(convertTimestamp2Str(test_time, 1)); // err
*/
