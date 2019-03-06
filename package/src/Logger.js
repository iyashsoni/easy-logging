var _mandatoryParam = require('./Utils')._mandatoryParam;
var _typeCheck = require('./Utils')._typeCheck;
var _isValidLogLevel = require('./Utils')._isValidLogLevel;
var getJSONLogData = require('./Utils').getJSONLogData;
const chalk = require('chalk').default;
const log = console.log;

const LogLevelValues = {
    "ERROR": 10,
    "WARN": 20,
    "INFO": 30,
    "DEBUG": 40,
    "TRACE": 50
}

const colorSchema = {
    error: chalk.redBright.bold,
    warn: chalk.yellowBright,
    info: chalk.cyanBright,
    debug: chalk.greenBright,
    trace: chalk.whiteBright.bgBlackBright,
    entering: chalk.whiteBright.bgBlackBright,
    exiting: chalk.whiteBright.bgBlackBright,
};

const Logger  = function (tag, level){
    if(typeof tag == undefined || tag == null) {
        _mandatoryParam('tag');
    }
    _typeCheck(tag, "string");
    // setting NAME & LEVEL
    this.tag = tag;
    this.level = (level && level != undefined ? String(level).toUpperCase() : "INFO");
    _isValidLogLevel(this.level);
    this.indentation = 2;
    this.setIndentation = function(value) {
        if(typeof value == undefined) {
            _mandatoryParam('value');
        }
        _typeCheck(value, "number");
        this.indentation = value;
    };

    // Logging functions
    this.error = function(msg, ...logParams){
        if(LogLevelValues[this.level] >= LogLevelValues.ERROR)
        var logData = getJSONLogData("ERROR", this.tag, msg, logParams);
        log(colorSchema.error(JSON.stringify(logData, null, this.indentation) + "\n"));  
    };
    this.warn = function(msg, ...logParams){
        if(LogLevelValues[this.level] >= LogLevelValues.WARN)
        var logData = getJSONLogData("WARN", this.tag, msg, logParams);
        log(colorSchema.warn(JSON.stringify(logData, null, this.indentation) + "\n"));
    };
    this.info = function(msg, ...logParams){
        if(LogLevelValues[this.level] >= LogLevelValues.INFO)
        var logData = getJSONLogData("INFO", this.tag, msg, logParams);
        log(colorSchema.info(JSON.stringify(logData, null, this.indentation) + "\n"));
    };
    this.debug = function(msg, ...logParams){
        if(LogLevelValues[this.level] >= LogLevelValues.DEBUG)
        var logData = getJSONLogData("DEBUG", this.tag, msg, logParams);
        log(colorSchema.debug(JSON.stringify(logData, null, this.indentation) + "\n"));  
    };
    this.entering = function(methodName, ...logParams){
        if(LogLevelValues[this.level] <= LogLevelValues.TRACE)
        var logData = getJSONLogData("TRACE", this.tag, methodName, logParams, "ENTRY");
        log(colorSchema.entering(JSON.stringify(logData, null, this.indentation) + "\n"));  
    };
    this.exiting = function(methodName, ...logParams){
        if(LogLevelValues[this.level] <= LogLevelValues.TRACE)
        var logData = getJSONLogData("TRACE", this.tag, methodName, logParams, "EXIT");
        log(colorSchema.exiting(JSON.stringify(logData, null, this.indentation) + "\n"));  
    };
    this.trace = function(msg, ...logParams){
        if(LogLevelValues[this.level] <= LogLevelValues.TRACE)
        var logData = getJSONLogData("TRACE", this.tag, msg, logParams);
        log(colorSchema.trace(JSON.stringify(logData, null, this.indentation) + "\n"));  
    };
};

module.exports = {Logger}