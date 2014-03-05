var pairs = ['EUR_USD', 'EUR_CAD'];
var flipInterval = 20000;
var baseFlipped = quoteFlipped = false;
var pair = 'EUR_USD';

/*update the major/minor/pip portions of a price*/
var updatePrice = function(component, price) {
    price = price.toString();
    while (price.length < 7) {
        price += '0';
    }
    $('.' + component + ' .data-price-major').text(price.substr(0, 4));
    $('.' + component + ' .data-price-minor').text(price.substr(4, 2));
    $('.' + component + ' .data-price-pip').text(price.charAt(6));
}

/*update the bid/ask prices of the pair data section*/
var updatePrices = function(rateQuoteResponse) {
    var i;
    for (i = 0; i < rateQuoteResponse.prices.length; i++) {
        rate = rateQuoteResponse.prices[i];

        base = rate.instrument.substr(0, 3);
        quote = rate.instrument.substr(4, 3);

        if (rate.instrument === pair) {
            updatePrice(base, rate.bid);
        }
        updatePrice(quote, rate.ask);
    }
}

/*polling every second*/
var pollPrices = function() {
    OANDA.rate.quote(pairs, updatePrices);
    timeout = setTimeout(pollPrices, 1000);
}

var timeout = setTimeout(pollPrices, 0);

/* flip QUOTE every Xs */
setInterval(function() {
    quoteFlipped = $('.data-right').toggleClass('flipped').hasClass('flipped');

    pair = (baseFlipped ? 'GBP' : 'EUR') + '_' + (quoteFlipped ? 'CAD' : 'USD');

    setTimeout(function() {
        if (quoteFlipped) {
            $('.data-right .front .data-price-pip').hide();
        } else {
            $('.data-right .back .data-price-pip').hide();
        }
    }, 250);
    setTimeout(function() {
        if (quoteFlipped) {
            $('.data-right .back .data-price-pip').show();
        } else {
            $('.data-right .front .data-price-pip').show();
        }
        /* update trades & orders */
        populateLowerPageWithPair(pair);
    }, 600);
}, flipInterval);

/* flip BASE every 2*Xs */
setInterval(function() {
    baseFlipped = $('.data-left').toggleClass('flipped').hasClass('flipped');

    pairs = baseFlipped ? [ 'GBP_USD', 'GBP_CAD' ] : [ 'EUR_USD', 'EUR_CAD' ];

    setTimeout(function() {
        if (baseFlipped) {
            $('.data-left .front .data-price-pip').hide();
        } else {
            $('.data-left .back .data-price-pip').hide();
        }
    }, 250);
    setTimeout(function() {
        if (baseFlipped) {
            $('.data-left .back .data-price-pip').show();
        } else {
            $('.data-left .front .data-price-pip').show();
        }
    }, 600);
}, 2*flipInterval);
