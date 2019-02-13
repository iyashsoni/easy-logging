var Logger = require('../index');

/**
 * Logger() is a constructor with 2 params - 
 *      a MANDATORY 'TAG' param and an OPTIONAL 'LEVEL' param
 * TAG - log instance identifier
 * LEVEL - acts as a logs filter. Accepted values are ["INFO","DEBUG","WARN","ERROR","TRACE"]
 */
var logInstance = new Logger("MyLoggerTag", "trace");

// // Logging Errors data
// logInstance.error("I'm an error!");

// // Logging Warning data
// logInstance.warn("I'm a warn!", {something: "anything"});

// // Logging Info data
// logInstance.info("I'm an info!", 1, 2, 3, 4, 5);

// // Logging Debug data
// logInstance.debug("I'm a debug!", ["Hello","World!"]);

// // Logging Trace data
// logInstance.trace("I'm a trace!");

// Logging Method Entry with Entry params
logInstance.entering("testMethod", {"hello":"world"}, {"timeStamp":"1234567890"}, "This is another parameter that I want to be logged...");

// Logging Method Exit with Exit params
logInstance.exiting("testMethod", {"bye":"bye"});