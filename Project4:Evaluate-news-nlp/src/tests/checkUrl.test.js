import { checkUrl } from '../client/js/checkUrl';

describe('check for url functionality', () => {
    test('check url', () => {
        expect(checkUrl('https://www.techlearning.com/news/15-awesome-article-sites-for-students')) === true;
        expect(checkUrl('httbs://www.techlearning.com/news/15-awesome-article-sites-for-students')) === false;
    });
})