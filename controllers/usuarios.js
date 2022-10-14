import { response, request } from 'express';

const example = (req = request, res = response) => {
    res.send('Hello World!');
};

export {
    example
}