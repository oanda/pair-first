var pair = 'EUR_USD';

/*update the major/minor/pip portions of a price*/
var updatePrice = function(component, price) {
    price = price.toString();
    while (price.length < 7) {
        price += '0';
    }
    $('#' + component + '-price-major').text(price.substr(0, 4));
    $('#' + component + '-price-minor').text(price.substr(4, 2));
    $('#' + component + '-price-pip').text(price.charAt(6));
}

/*update the bid/ask prices of the pair data section*/
var updatePrices = function(rateQuoteResponse) {
    rate = rateQuoteResponse.prices[0];

    updatePrice('base', rate.bid);
    updatePrice('quote', rate.ask);
}

/*polling every second*/
var pollPrices = function() {
    OANDA.rate.quote([pair], updatePrices);
    timeout = setTimeout(pollPrices, 1000);
}

var timeout = setTimeout(pollPrices, 0);
