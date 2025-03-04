function checkParam (param, param_name, support_type) {
    if(typeof param != support_type) {
        throw "param '%param_name' must be %support_type but get %value (%type)"
            .replace('%param_name', param_name)
            .replace('%support_type', support_type)
            .replace('%value', param)
            .replace('%type', typeof param);
    }
}
exports.checkParam = checkParam

function checkEEParam(param, param_name, support_type, is_info) {
    if (is_info === undefined || (!is_info)) {
        param = param.getInfo();
    }
    if (param.type != support_type) {
        throw "param collection must be %support_type but get a %err_type"
            .replace('%support_type', support_type)
            .replace('%err_type', param.type)
    }
}
exports.checkEEParam = checkEEParam

/*
// Test
checkParam(1, 'param1', 'number')
checkParam(2, 'param2', 'string') // err
*/
