"use strict";
var EventPublisher = (function () {
    function EventPublisher() {
        this.observers = {};
    }
    EventPublisher.prototype.subscribe = function (eventName, observer) {
        if (typeof this.observers[eventName] === "undefined") {
            this.observers[eventName] = [];
        }
        this.observers[eventName].push(observer);
    };
    EventPublisher.prototype.publish = function (eventName) {
        var eventData = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            eventData[_i - 1] = arguments[_i];
        }
        if (typeof this.observers[eventName] !== "undefined") {
            this.observers[eventName].forEach(function (observer) {
                observer.apply(null, eventData);
            });
        }
    };
    return EventPublisher;
}());
exports.__esModule = true;
exports["default"] = new EventPublisher();
