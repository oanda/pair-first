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
        alt: openValue,
        text: direction + ' @ ' + openValue + " → "
    }).appendTo('#'+tradeId);

    bidOrAsk = (direction == "Short") ? "bid" : "ask";
    $('<span/>', {
        class: 'trade-currentrate currentrate-' + pair + bidOrAsk,
        text: 0
    }).appendTo('#'+tradeId);

    $('#'+tradeId).append("<div class='tradePLBar'><div></div></div>");
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
        text: units + " Units"
    }).appendTo('#'+orderId);

    bidOrAsk = (direction == "Short") ? "bid" : "ask";
    $('<span/>', {
        class: 'order-distance',
        text: 0
    }).appendTo('#'+orderId);

    $('<br/>').appendTo('#'+orderId);

    $('<span/>', {
        class: 'order-fineprint',
        alt: openValue,
        text: direction + ' @ ' + openValue + ' → '
    }).appendTo('#'+orderId);

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
            var plSpan = $(this).siblings(".trade-pl")[0];
            var open = $(this).siblings(".trade-fineprint")[0];
            var pl = (parseFloat(rate.bid) - parseFloat($(open).attr("alt"))).toFixed(5);
            $(plSpan).text( pl );
            if( pl < 0 ){ $(plSpan).removeClass("stats-profit").addClass("stats-loss"); }
            else{ $(plSpan).addClass("stats-profit").removeClass("stats-loss"); }

            var orderDistance = $(this).siblings(".order-distance")[0];
            var orderValue = $(this).siblings(".order-fineprint")[0];            
            var orderDelta = (parseFloat(rate.bid) - parseFloat($(orderValue).attr("alt"))).toFixed(5);
            $(orderDistance).text( orderDelta );
            if( orderDelta < 0 ){ $(orderDistance).removeClass("stats-profit").addClass("stats-loss"); }
            else{ $(orderDistance).addClass("stats-profit").removeClass("stats-loss"); }
        });
        $(".currentrate-" + pair + "ask").each(function(index){
            $(this).text(rate.ask);
            var plSpan = $(this).siblings(".trade-pl")[0];
            var open = $(this).siblings(".trade-fineprint")[0];
            var pl = (parseFloat($(open).attr("alt")) - parseFloat(rate.ask)).toFixed(5);
            $(plSpan).text( pl );
            if( pl < 0 ){ $(plSpan).removeClass("stats-profit").addClass("stats-loss"); }
            else{ $(plSpan).addClass("stats-profit").removeClass("stats-loss"); }

            var orderDistance = $(this).siblings(".order-distance")[0];
            var orderValue = $(this).siblings(".order-fineprint")[0];            
            var orderDelta = (- parseFloat(rate.bid) + parseFloat($(orderValue).attr("alt"))).toFixed(5);
            $(orderDistance).text( orderDelta );
            if( orderDelta < 0 ){ $(orderDistance).removeClass("stats-profit").addClass("stats-loss"); }
            else{ $(orderDistance).addClass("stats-profit").removeClass("stats-loss"); }
        });
    });
}



function populateLowerPageWithPair(pair){
    $('#trades-list').empty();
    $('#orders-list').empty();
    trades = trades_data[pair]["open_trades"];
    $(trades).each(function(index){
        createTradeItem(this.id,this.symbol.replace("/","_"),this.units,this.price,this.dir == "L" ? "Long" : "Short");
    });

    orders = orders_data[pair]["open_orders"];
    $(orders).each(function(index){
        createOrderItem(this.id,this.symbol.replace("/","_"),this.units,this.price,this.type == "L" ? "Long" : "Short");
    });

    getQuote(pair);
    setInterval("getQuote('"+pair+"')", 1000);
}

populateLowerPageWithPair("EUR_USD");
