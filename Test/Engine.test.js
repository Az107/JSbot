const engine = require("../build/engine");

var eng = new engine.Engine();

test("simple engine test 1",() => {
    let a = eng.Exec("1+2");
    expect(a).toBe(3);
});

test("simple engine test 2",() => {
    let a = eng.Exec("!true");
    expect(a).toBe(false);
});

test("bannana test",() => {
    let a = eng.Exec("('b' + 'a' + + 'a' + 'a').toLowerCase()");
    expect(a).toBe("banana");
});

