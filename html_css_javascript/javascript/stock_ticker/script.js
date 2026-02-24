import { getStockData } from "./fakeStockAPI";

setInterval (function() {
    const stockData = getStockData();
    renderStockTicker(stockData);
}, 1500)

let prevPrice = null;

function renderStockTicker(stockData) {
    const stockDisplayName = document.getElementById("name");
    const stockDisplaySymbol = document.getElementById("symbol");
    const stockDisplayPrice = document.getElementById("price");
    const stockDisplayPriceIcon = document.getElementById("price-icon");
    const stockDisplayTime = document.getElementById("time");

    const {name, sym, price, time} = stockData;

    const priceDirectionIcon = price > prevPrice ? '▲' :
    price < prevPrice ? '▼' :  '►' ;


    stockDisplayName.innerText = name;
    stockDisplaySymbol.innerText = sym;
    stockDisplayPrice.innerText = price;
    stockDisplayTime.innerText = time;
    stockDisplayPriceIcon.innerText = priceDirectionIcon;

    prevPrice = price;
}