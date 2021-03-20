import { submitHandler } from '..client/js/formHandler';

describe('Testing the form submit functionality', () => {
    test('submit form testing', () => {
        expect(submitHandler).toBeDefined();
    });
})