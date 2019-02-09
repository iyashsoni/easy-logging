var Logger = require('../index');

var instance = new Logger("MyTag", "trace");
instance.entering("testMethod", {"hello":"world"});
instance.error("I'm an error!");
instance.trace("I'm a trace!");
instance.info("I'm an info!");
instance.debug("I'm a debug!", ["Hello","Yash"]);
instance.warn("I'm a warn!", {something: "anything"});
instance.exiting("testMethod", {"hello":"world"});