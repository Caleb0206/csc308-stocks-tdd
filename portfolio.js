class Portfolio {
    constructor() {
        this.stocks = {};
    }
    
    isEmpty() {
        return Object.keys(this.stocks).length == 0;
    }
    makePurhcase(symbol, num) {
        if(num == 0) // enforces increment 2.6
            return;
        if(this.stocks[symbol])
            this.stocks[symbol] += num;
        else
            this.stocks[symbol] = num;
    }
    makeSale(symbol, num) {
        if(!this.stocks[symbol])
            throw new Error("Stock does not exist");
        if(this.stocks[symbol] >= num)
            this.stocks[symbol] -= num;
        else
            throw new Error("Not possible to sell this number of shares");
        // Implementation of increment 2.6
        if(this.stocks[symbol] == 0)
        {
            delete this.stocks[symbol];
        }
    }
    getTickerCount() {
        return Object.keys(this.stocks).length;
    }
    getShares(symbol) {
        if(this.stocks[symbol])
            return this.stocks[symbol];
        else
            return 0;
    }
}

module.exports = Portfolio;