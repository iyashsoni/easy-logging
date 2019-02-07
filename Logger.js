import {createLogger} from 'bunyan'
import {_mandatoryParam, _typeCheck, _existsIn} from './Utils'
import {stripColors} from 'colors';

const LogLevel = ["DEBUG","WARN","TRACE","INFO","ERROR"];

class Logger {
    constructor(name = _mandatoryParam('name'), level){
        _typeCheck('name', String);
        _existsIn(level, LogLevel);
        var logger =  createLogger({ 
            name: name,
            level:(level ? level : 'info')
        });

        this.error = function(logParams){
            logger.error(stripColors.red(logParams, 'ENTRY'));
        };
        this.info = function(logParams){
            logger.info(stripColors.blue(logParams));  
        };
        this.debug = function(logParams){
            logger.debug(stripColors.yellow(logParams, 'ENTRY'));  
        };
        this.entering = function(logParams){
            logger.trace(stripColors.bgWhite(logParams, 'ENTRY'));  
        };
        this.exiting = function(logParams){
            logger.trace(stripColors.bgWhite(logParams, 'EXIT'));  
        };
    };
}

export {Logger}