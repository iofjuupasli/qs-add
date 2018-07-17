qs-add
===

Add query string values to url.

API:
---
```
(addition: String | Object) => (url: string) => string
```

Example:
---
```js
import qsAdd from 'qs-add';

qsAdd({a: `aa`})(`/foo/bar`);// /foo/bar?a=aa
qsAdd(`a=aa`)(`/foo/bar?a=x`);// /foo/bar?a=aa

qsAdd({a: `aa`})(`https://user:psw@sub.example.com:3000/foo/bar?query=string#hash`);
// https://user:psw@sub.example.com:3000/foo/bar?query=string&a=aa#hash
```
