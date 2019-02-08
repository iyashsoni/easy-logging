const _typeCheck = function (type) {
    switch(type) {
        case 'name':
            
    }
}

const _mandatoryParam = function (paramName) {
    return new Error(`${paramName} is a required parameter. Please pass this parameter value while initializing Logger Object.`);
}

const _existsIn = function (value, container) {
    value = String(value).toUpperCase();
    if(typeof value == "string" && container.indexOf(value) == -1) {
        return new Error(`${value} is not a valid value for the field: LogLevel. Please select one of the following: ${container}`);
    }
}

module.exports =  {
    _mandatoryParam, _typeCheck, _existsIn
}