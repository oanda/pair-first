function createTradeItem(tradeId,pair,units,openValue,direction){
    $('<li/>', {
        id: tradeId,
        class: 'trade-item'
    }).appendTo('#trades-list');

    $('<span/>', {
        class: 'trade-pair',
        text: pair.replace("_","/")
    }).appendTo('#'+tradeId);

    $('<span/>', {
        class: 'trade-units',
        text: units + " Units"
    }).appendTo('#'+tradeId);

    $('<span/>', {
        class: 'trade-pl',
        text: 0
    }).appendTo('#'+tradeId);

    $('<br/>').appendTo('#'+tradeId);

    $('<span/>', {
        class: 'trade-fineprint',
        text: direction + ' @ ' + openValue + ' -> '
    }).appendTo('#'+tradeId);

    bidOrAsk = (direction == "Short") ? "bid" : "ask";
    $('<span/>', {
        class: 'trade-currentrate, currentrate-' + pair + bidOrAsk,
        text: 0
    }).appendTo('#'+tradeId);


};

function createOrderItem(orderId,pair,units,openValue,direction){
    $('<li/>', {
        id: orderId,
        class: 'order-item'
    }).appendTo('#orders-list');

    $('<span/>', {
        class: 'order-pair',
        text: pair.replace("_","/")
    }).appendTo('#'+orderId);

    $('<span/>', {
        class: 'order-units',
        text: units
    }).appendTo('#'+orderId);

    $('<span/>', {
        class: 'order-distance',
        text: 0
    }).appendTo('#'+orderId);

    $('<br/>').appendTo('#'+orderId);

    $('<span/>', {
        class: 'order-fineprint',
        text: direction + ' @ ' + openValue + ' -> '
    }).appendTo('#'+orderId);

    bidOrAsk = (direction == "Short") ? "bid" : "ask";
    $('<span/>', {
        class: 'order-currentrate currentrate-' + pair + bidOrAsk,
        text: 0
    }).appendTo('#'+orderId);
};

function getQuote(pair){
    OANDA.rate.quote([pair], function(rateQuoteResponse){
        rate = rateQuoteResponse.prices[0];
        $(".currentrate-" + pair + "bid").each(function(index){
            $(this).text(rate.bid);
        });
        $(".currentrate-" + pair + "ask").each(function(index){
            $(this).text(rate.ask);
        });
    });
}

trades = trades_data["EUR_USD"]["open_trades"];
$(trades).each(function(index){
    createTradeItem(this.id,this.symbol.replace("/","_"),this.units,this.price,this.dir == "L" ? "Long" : "Short");});

createOrderItem(32124,"EUR_USD",300,1.4212,"Long");
createOrderItem(42367,"EUR_USD",300,1.4212,"Long");
createOrderItem(3975,"EUR_USD",300,1.4212,"Long");

setInterval("getQuote('EUR_USD')", 1000);
