var _mandatoryParam = require('./Utils')._mandatoryParam;
var _typeCheck = require('./Utils')._typeCheck;
var _isValidLogLevel = require('./Utils')._isValidLogLevel;
var getJSONLogString = require('./Utils').getJSONLogString;
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
    _typeCheck('tag', "string");
    // setting NAME & LEVEL
    this.tag = tag;
    this.level = (level && level != undefined ? String(level).toUpperCase() : "INFO");
    _isValidLogLevel(this.level);

    // Logging functions
    this.error = function(msg, ...logParams){
        if(LogLevelValues[this.level] >= LogLevelValues.ERROR)
        log(colorSchema.error(getJSONLogString("ERROR", this.tag, msg, logParams)));  
    };
    this.warn = function(msg, ...logParams){
        if(LogLevelValues[this.level] >= LogLevelValues.WARN)
        log(colorSchema.warn(getJSONLogString("WARN", this.tag, msg, logParams)));
    };
    this.info = function(msg, ...logParams){
        if(LogLevelValues[this.level] >= LogLevelValues.INFO)
        log(colorSchema.info(getJSONLogString("INFO", this.tag, msg, logParams)));
    };
    this.debug = function(msg, ...logParams){
        if(LogLevelValues[this.level] >= LogLevelValues.DEBUG)
        log(colorSchema.debug(getJSONLogString("DEBUG", this.tag, msg, logParams)));  
    };
    this.entering = function(methodName, ...logParams){
        if(LogLevelValues[this.level] <= LogLevelValues.TRACE)
        log(colorSchema.entering(getJSONLogString("TRACE", this.tag, methodName, logParams, "ENTRY")));  
    };
    this.exiting = function(methodName, ...logParams){
        if(LogLevelValues[this.level] <= LogLevelValues.TRACE)
        log(colorSchema.exiting(getJSONLogString("TRACE", this.tag, methodName, logParams, "EXIT")));  
    };
    this.trace = function(msg, ...logParams){
        if(LogLevelValues[this.level] <= LogLevelValues.TRACE)
        log(colorSchema.trace(getJSONLogString("TRACE", this.tag, msg, logParams)));  
    };
};

module.exports = {Logger}