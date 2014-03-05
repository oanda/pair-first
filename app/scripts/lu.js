function createTradeItem(tradeId,pair,units,openValue,direction){
    $('<li/>', {
        id: tradeId,
        class: 'trade-item'
    }).appendTo('#trades-list');

    $('<span/>', {
        class: 'trade-pair',
        text: pair
    }).appendTo('#'+tradeId);

    $('<span/>', {
        class: 'trade-units',
        text: units
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

    $('<span/>', {
        class: 'trade-currentrate',
        id: 'currentrate-' + pair,
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
        text: pair
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

    $('<span/>', {
        class: 'order-currentrate',
        id: 'currentrate-' + pair,
        text: 0
    }).appendTo('#'+orderId);
};


createTradeItem(12345,"EUR/USD","500 Units",1.2332,"Short");
createTradeItem(431234,"EUR/USD","500 Units",1.2332,"Short");
createTradeItem(5324,"EUR/USD","500 Units",1.2332,"Short");
createTradeItem(113411,"EUR/USD","500 Units",1.2332,"Short");


createOrderItem(32124,"EUR/USD",300,1.4212,"Long");
createOrderItem(42367,"EUR/USD",300,1.4212,"Long");
createOrderItem(3975,"EUR/USD",300,1.4212,"Long");
