function load() {
    return 'Hello world';
}
let hello = load();

const trimmed = (hello as string).trim();
// const trimmed1 = (<string>hello).trim(); // not working in tsx files