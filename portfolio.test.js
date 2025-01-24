/**
 * Reflection on TDD
 * At first, I found it really hard to follow the test-fist appoach, going over the 
 * red-green refactor cycle because I felt it was so unnecessary. I felt like I knew that
 * the test was not going to work because I hadn't created the function for it yet. Then
 * after creating the function with very little implmentation to let it pass, I knew that 
 * it still would not pass other tests with it. 
 * However, then I started getting into the groove of TDD and started appreciating it a lot 
 * more. I felt like a machine grinding out the red-green refactor cycle. I can definitely
 * appreciate it now, but I don't think my brain will be trained to perform TDD everytime
 * I code. I can see how useful it can be, though, by preventing more bugs since you are 
 * testing first. 
 */
const Portfolio = require('./portfolio');

test('2.1 Test a new created portfolio is empty - success', () => {
    const portfolio = new Portfolio();
    expect(portfolio.stocks).toEqual({});
});
test('2.2 Test a portfolio is Empty - true', () => {
    const portfolio = new Portfolio();
    portfolio.stocks = {};

    expect(portfolio.isEmpty()).toBe(true);
});
test('2.2 Test a portfolio is Empty - false', () => {
    const portfolio = new Portfolio();
    portfolio.stocks = {APPLE : 1};

    expect(portfolio.isEmpty()).toBe(false);
});
test('2.3 Test making a purhcase - success', () => {
    const portfolio = new Portfolio();
    const expected = {"APPL":1};

    portfolio.makePurhcase("APPL", 1);

    expect(portfolio.stocks).toEqual(expected);
});
test('2.3 Test making multiple purhcase - success', () => {
    const portfolio = new Portfolio();
    const expected = {"APPLE":3, "ORNG":1};

    portfolio.makePurhcase("APPLE", 1);
    portfolio.makePurhcase("APPLE", 2);
    portfolio.makePurhcase("ORNG", 1);

    expect(portfolio.stocks).toEqual(expected);
});
test('2.4 Test make a sale - success', () => {
    const portfolio = new Portfolio();
    portfolio.stocks = {"BANANA": 4};
    const expected = {"BANANA" : 2};

    portfolio.makeSale("BANANA", 2);

    expect(portfolio.stocks).toEqual(expected);
});
test('2.4 Test make a sale - error', () => {
    const portfolio = new Portfolio();

    portfolio.stocks = {"MCRSFT": 4};
    
    expect(() => portfolio.makeSale("APPL", 2)).toThrow("Stock does not exist");
});
test('2.5 Test get ticker count - success', () => {
    const portfolio = new Portfolio();
     portfolio.stocks = {"APPL":3, "MCRSFT":2};

     expect(portfolio.getTickerCount()).toEqual(2);

     portfolio.makePurhcase("EPIC", 3);

     expect(portfolio.getTickerCount()).toEqual(3);
});
test('2.5 Test get ticker count of empty - success', () => {
    const portfolio = new Portfolio();
    
     expect(portfolio.getTickerCount()).toEqual(0);

});
test('2.6 Test portfolio purchase 0 - success', () => {
    const portfolio = new Portfolio();

    portfolio.makePurhcase("APPL", 0);

    expect(portfolio.getTickerCount()).toEqual(0);

});
test('2.6 Test portfolio removes stock after selling all of it - success', () => {
    const portfolio = new Portfolio();

    portfolio.makePurhcase("APPL", 2);
    portfolio.makeSale("APPL", 2);

    expect(portfolio.getTickerCount()).toEqual(0);
});
test('2.7 Test portfolio return shares of given stock - success', () => {
    const portfolio = new Portfolio();

    portfolio.makePurhcase("APPL", 13);
    portfolio.makeSale("APPL", 2);

    expect(portfolio.getShares("APPL")).toEqual(11);
});
test('2.7 Test portfolio return shares of unowned stock - success', () => {
    const portfolio = new Portfolio();

    portfolio.makePurhcase("APPL", 1);
    portfolio.makeSale("APPL", 1);

    expect(portfolio.getShares("APPL")).toEqual(0);
});
test('2.8 Test portfolio throw error when selling more than it has - success', () => {
    const portfolio = new Portfolio();

    portfolio.makePurhcase("APPL", 1);
    
    expect(() => portfolio.makeSale("APPL", 32)).toThrow("Not possible to sell this number of shares");
});