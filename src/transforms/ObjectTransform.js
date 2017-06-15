import InputHandler from './../InputHandler';

function ObjectTransform(input) {
    if(Array.isArray(input)) {
        return input.map((item) => InputHandler(item));
    }

    return input;
}

export default ObjectTransform;