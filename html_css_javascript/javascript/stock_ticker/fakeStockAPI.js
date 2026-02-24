//const now = new Date();
export function getStockData () {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random() * 4).toFixed(2) /* return a random number between 0 and 3 to two decimal places */,
        time: new Date().toLocaleTimeString() /* return a timestamp in this format: hh/mm/ss */ /* now.toLocaleTimeString('en-PK',{hour12:false})*/
    }
}