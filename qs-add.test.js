/**
 * @jest-environment node
 */
const qsAdd = require(`./`);

describe(`qs-add package`, () => {
    it(`should add qs object to url`, () => {
        expect(qsAdd({a: `aa`})(`/foo/bar`)).toEqual(`/foo/bar?a=aa`);
    });
    it(`should prefer new qs`, () => {
        expect(qsAdd(`a=aa`)(`/foo/bar?a=x`)).toEqual(`/foo/bar?a=aa`);
    });
    it(`should merge query strings`, () => {
        expect(qsAdd(`a=aa`)(`/foo/bar?b=x`)).toEqual(`/foo/bar?b=x&a=aa`);
    });
    it(`should handle null`, () => {
        expect(qsAdd(null)(null)).toEqual(``);
    });
    it(`should handle undefined`, () => {
        expect(qsAdd(undefined)(undefined)).toEqual(``);
    });
    it(`should merge to full url`, () => {
        expect(qsAdd({a: `aa`})(`https://user:psw@sub.example.com:3000/foo/bar?query=string#hash`))
            .toEqual(`https://user:psw@sub.example.com:3000/foo/bar?query=string&a=aa#hash`);
    });
});
