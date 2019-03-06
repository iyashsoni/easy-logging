const LogLevels = ["INFO","DEBUG","WARN","ERROR","TRACE"];

const _typeCheck = function (field, type) {
    if(typeof field != type) {
        throw new Error(`${field} is not of type ${String(type)}. Please try again!`);
    }
}

const _mandatoryParam = function (paramName) {
    throw new Error(`${paramName} is a required parameter. Please pass this parameter value while initializing Logger Object.`);
}

const _isValidLogLevel = function (level) {
    level = String(level).toUpperCase();
    if(typeof level == "string" && LogLevels.indexOf(level) == -1) {
        throw new Error(`${level} is not a valid value for the field: LogLevel. Please select one of the following: ${LogLevels}`);
    }
}

// Util function to convert msg into logging string
function getJSONLogData(level, tag, msg, logParams, traceMeta) {
    const result = { 
        tag: tag,
        level: level,
        timestamp: Date()
    };
    if(traceMeta) {
        result.tracePoint = traceMeta;
        result.methodName = msg;
    } else {
        result.msg = msg;
    }
    result.extraParams = logParams;
    return result;
}

module.exports =  {
    _mandatoryParam, _typeCheck, _isValidLogLevel, getJSONLogData
}