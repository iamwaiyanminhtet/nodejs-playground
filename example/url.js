// const myURL = new URL('https://example.org');

// myURL.pathname = '/hello.html';
// myURL.search = '?id=100';
// myURL.hash = '#fgh';


const pathname = '/hello.html';
const search = '?id=100';
const hash = '#fgh';
const myURL = new URL(`https://example.org:8000${pathname}${search}${hash}`);
console.log(myURL.href) // https://example.org:8000/hello.html?id=100#fgh
console.log(myURL.host) // example.com:8000
console.log(myURL.hostname) // example.com
console.log(myURL.search) // ?id=100
console.log(myURL.searchParams) // {id => 100}
myURL.searchParams.append('type', 'user')
console.log(myURL.searchParams) // { 'id' => '100', 'type' => 'user' }
myURL.searchParams.forEach((value, name) => console.log(name, value)) // id 100 and type user