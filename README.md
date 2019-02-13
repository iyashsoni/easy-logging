# # easy-logging

#### Easily write beautiful JSON formatted logs with colours for each level. 

- - - -

#### Example:

##### - Initialisation:

```
var Logger = require('easy-logging');

/**
 * Logger() is a constructor with 2 params - 
 * 		a MANDATORY 'TAG' param and an OPTIONAL 'LEVEL' param
 * TAG - log instance identifier
 * LEVEL - acts as a logs filter. Accepted values are ["INFO","DEBUG","WARN","ERROR","TRACE"]
 */
var logInstance = new Logger("MyLoggerTag", "trace");

```

##### - Usage:

Each of the Logger APIs take first param as a message - it is essential to pass meaningful value to this parameter.

After message parameter, follows a variable length argument - meaning you can send as many extra as you want to log. Example for this is shown above.

```
// Logging Errors data
logInstance.error("I'm an error!");

// Logging Warning data
logInstance.warn("I'm a warn!", {something: "anything"});

// Logging Info data
logInstance.info("I'm an info!", 1, 2, 3, 4, 5);

// Logging Debug data
logInstance.debug("I'm a debug!", ["Hello","World!"]);

// Logging Trace data
logInstance.trace("I'm a trace!");
```

Apart from the above mentioned basic Logging methods, we have two special methods `entering & exiting` that will help developers write `detailed-logging-enabled` applications.

Here's the first parameter is always methodName - this helps us marking ENTRY or EXIT to that method. Second parameter is again a variable length argument - this is mainly aimed to log method parameters while Entering and Exiting the method.

Example:

```
// Logging Method Entry with Entry params
logInstance.entering("testMethod", {"hello":"world"}, {"timeStamp":"1234567890"}, "This is another parameter that I want to be logged...");

// Logging Method Exit with Exit params
logInstance.exiting("testMethod", {"bye":"bye"});

```

Screenshots: 
![](README/Screenshot%202019-02-13%20at%208.04.53%20PM.png)
![](README/Screenshot%202019-02-13%20at%208.06.07%20PM.png)


That’s it, simple and easy to use - Colourful Logging Library!

Cheers! 🍻