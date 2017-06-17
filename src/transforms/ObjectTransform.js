import InputHandler from './../InputHandler';

function ObjectTransform(input) {
    if(Array.isArray(input)) {
        return input.map((item) => InputHandler(item));
    } else if(typeof input !== 'function') {
        const newObj = {};

        for (var key in input) {
            newObj[key] = InputHandler(input[key]);
        }

        return newObj;
    }

    return input;
}

export default ObjectTransform;