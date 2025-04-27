class Stock {
    constructor(symbol, price) {
        this.symbol = symbol;
        this.price = price;
    }
    
    updatePrice() {
        this.price += (Math.random() - 0.5) * 10;
        this.price = Math.max(1, this.price.toFixed(2));
    }
}

class Trader {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.portfolio = {};
    }
    
    buyStock(stock, quantity) {
        const cost = stock.price * quantity;
        if (this.balance >= cost) {
            this.balance -= cost;
            if (!this.portfolio[stock.symbol]) {
                this.portfolio[stock.symbol] = 0;
            }
            this.portfolio[stock.symbol] += quantity;
            console.log(`${this.name} bought ${quantity} of ${stock.symbol} at $${stock.price}`);
        } else {
            console.log(`${this.name} cannot afford ${quantity} of ${stock.symbol}`);
        }
    }
    
    sellStock(stock, quantity) {
        if (this.portfolio[stock.symbol] >= quantity) {
            this.portfolio[stock.symbol] -= quantity;
            this.balance += stock.price * quantity;
            console.log(`${this.name} sold ${quantity} of ${stock.symbol} at $${stock.price}`);
        } else {
            console.log(`${this.name} does not have enough ${stock.symbol} to sell`);
        }
    }
}

class StockMarket {
    constructor(stocks) {
        this.stocks = stocks;
    }
    
    startTrading(traders, duration = 10000) {
        const interval = setInterval(() => {
            this.stocks.forEach(stock => stock.updatePrice());
            traders.forEach(trader => {
                const randomStock = this.stocks[Math.floor(Math.random() * this.stocks.length)];
                const action = Math.random() > 0.5 ? 'buy' : 'sell';
                const quantity = Math.floor(Math.random() * 5) + 1;
                if (action === 'buy') {
                    trader.buyStock(randomStock, quantity);
                } else {
                    trader.sellStock(randomStock, quantity);
                }
            });
        }, 2000);
        
        setTimeout(() => {
            clearInterval(interval);
            console.log('Trading session ended');
        }, duration);
    }
}

// Sample usage
const stocks = [new Stock('AAPL', 150), new Stock('GOOGL', 2800), new Stock('TSLA', 700)];
const traders = [new Trader('Alice', 5000), new Trader('Bob', 10000)];

const market = new StockMarket(stocks);
market.startTrading(traders);

console.log("End of the  code here...")