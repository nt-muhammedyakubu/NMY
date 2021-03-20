import { checkForName } from '../client/js/nameChecker';

describe('Testing the names functionality', () => {
    test('Name for testing', () => {
        expect(checkForName('Archer')) === true;
        expect(checkForName('Archier')) === false;
    });
})