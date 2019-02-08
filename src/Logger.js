var _mandatoryParam = require('./Utils')._mandatoryParam;
var _typeCheck = require('./Utils')._typeCheck;
var _existsIn = require('./Utils')._existsIn;
const chalk = require('chalk').default;
const log = console.log;

const LogLevel = ["INFO","DEBUG","WARN","ERROR","TRACE"];
const LogLevelValues = {
    "INFO": 10,
    "DEBUG": 20,
    "WARN": 30,
    "ERROR": 40,
    "TRACE": 50
}

const Logger  = function (tag, level){
    if(typeof tag == undefined || tag == null) {
        _mandatoryParam('tag');
    }
    _typeCheck('tag', "string");
    _existsIn(level, LogLevel);
    
    // setting NAME & LEVEL
    this.tag = tag;
    this.level = (level ? String(level).toUpperCase() : "INFO");

    // Util function to convert msg into logging string
    function getLogJSONString(level, tag, msg, logParams, traceMeta) {
        const result = { 
            tag: tag,
            level: level,
            timestamp: Date(),
            extra: logParams
        };
        if(traceMeta) {
            result.tracePoint = traceMeta;
            result.methodName = msg;
        } else {
            result.msg = msg;
        }
        return JSON.stringify(result);
    }

    // Logging functions
    this.error = function(msg, logParams){
        if(LogLevelValues[this.level] >= LogLevelValues.ERROR)
        log(chalk.red(getLogJSONString("ERROR", tag, msg, logParams)));
    };
    this.warn = function(msg, logParams){
        if(LogLevelValues[this.level] >= LogLevelValues.WARN)
        log(chalk.yellow(getLogJSONString("WARN", tag, msg, logParams)));
    };
    this.info = function(msg, logParams){
        if(LogLevelValues[this.level] >= LogLevelValues.INFO)
        log(chalk.cyan(getLogJSONString("INFO", tag, msg, logParams)));
    };
    this.debug = function(msg, logParams){
        if(LogLevelValues[level] >= LogLevelValues.DEBUG)
        log(chalk.blue(getLogJSONString("DEBUG", tag, msg, logParams)));  
    };
    this.entering = function(methodName, logParams){
        if(LogLevelValues[level] >= LogLevelValues.TRACE)
        log(chalk.gray(getLogJSONString("TRACE", tag, methodName, logParams, "ENTRY")));  
    };
    this.exiting = function(methodName, logParams){
        if(LogLevelValues[level] >= LogLevelValues.TRACE)
        log(chalk.gray(getLogJSONString("TRACE", tag, methodName, logParams, "EXIT")));  
    };
    this.trace = function(msg, logParams){
        if(LogLevelValues[level] >= LogLevelValues.TRACE)
        log(chalk.gray(getLogJSONString("TRACE", msg, logParams)));  
    };
};

module.exports = {Logger}