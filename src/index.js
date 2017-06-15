import InputHandler from './InputHandler';

((Promise) => {
    const originalThen = Promise.prototype.then;

    Promise.prototype.then = function() {
        const success = (response) => arguments[0](InputHandler(response));
        return originalThen.call(this, success, arguments[1] || null);
    };
})(window.Promise);
