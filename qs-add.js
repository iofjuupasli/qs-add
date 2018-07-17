const {parse} = require('url');
const qsMerge = require('qs-merge');

const qsAdd = (add) => (uri) => {
    const parsed = parse(uri || ``, true);
    const query = qsMerge(add)(parsed.query);
    parsed.search = query ? `?${query}` : ``;
    return parsed.format();
};

module.exports = qsAdd;
