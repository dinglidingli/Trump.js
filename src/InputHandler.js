import BooleanTransform from './transforms/BooleanTransform';
import NumberTransform from './transforms/NumberTransform';
import StringTransform from './transforms/StringTransform';
import ObjectTransform from './transforms/ObjectTransform';

function InputHandler(input) {
    switch(typeof input) {
        case 'object':
            return ObjectTransform(input);
        case 'string':
            return StringTransform(input);
        case 'number':
            return NumberTransform(input);
        case 'boolean':
            return BooleanTransform(input);
    }

    return input;
}

export default InputHandler;