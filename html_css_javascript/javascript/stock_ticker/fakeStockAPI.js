function getStockData () {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: Math.floor(Math.random() * 4) /* return a random number between 0 and 3 to two decimal places */,
        time: now.toLocaleTimeString('en-PK',{hour12:false}) /* return a timestamp in this format: hh/mm/ss */
    }
}