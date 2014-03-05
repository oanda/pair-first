trades_data = {
    "EUR_USD" : {
        "open_trades" : [
            { "id" : 1, "units" : 5, "dir" : "L", "symbol" : "EUR/USD", "time" : 1234567890, "price" : 1.45123, "stop_loss" : 1.2, "take_profit" : 1.7, "trailing_stop" : 10 },
            { "id" : 2, "units" : 100, "dir" : "S", "symbol" : "EUR/USD", "time" : 1234567891, "price" : 1.45123, "stop_loss" : 1.2, "take_profit" : 1.7, "trailing_stop" : 10 },
            { "id" : 3, "units" : 100, "dir" : "S", "symbol" : "EUR/USD", "time" : 1234567891, "price" : 1.45123, "stop_loss" : 1.2, "take_profit" : 1.7, "trailing_stop" : 10 },
            { "id" : 4, "units" : 100, "dir" : "S", "symbol" : "EUR/USD", "time" : 1234567891, "price" : 1.45123, "stop_loss" : 1.2, "take_profit" : 1.7, "trailing_stop" : 10 }
        ]
    },
    "EUR_CAD" : {
        "open_trades" : [
            { "id" : 5, "units" : 5, "dir" : "L", "symbol" : "EUR/CAD", "time" : 1234567890, "price" : 1.45123, "stop_loss" : 1.2, "take_profit" : 1.7, "trailing_stop" : 10 },
            { "id" : 6, "units" : 100, "dir" : "S", "symbol" : "EUR/CAD", "time" : 1234567891, "price" : 1.45123, "stop_loss" : 1.2, "take_profit" : 1.7, "trailing_stop" : 10 }
        ]
    },
    "GBP_USD" : {
        "open_trades" : [
            { "id" : 7, "units" : 5, "dir" : "L", "symbol" : "GBP/USD", "time" : 1234567890, "price" : 1.45123, "stop_loss" : 1.2, "take_profit" : 1.7, "trailing_stop" : 10 },
            { "id" : 8, "units" : 100, "dir" : "S", "symbol" : "GBP/USD", "time" : 1234567891, "price" : 1.45123, "stop_loss" : 1.2, "take_profit" : 1.7, "trailing_stop" : 10 },
            { "id" : 9, "units" : 1112, "dir" : "S", "symbol" : "GBP/USD", "time" : 1234567891, "price" : 1.4122, "stop_loss" : 1.2, "take_profit" : 1.7, "trailing_stop" : 10 }
        ]
    },
    "GBP_CAD" : {
        "open_trades" : [
            { "id" : 10, "units" : 5, "dir" : "L", "symbol" : "GBP/CAD", "time" : 1234567890, "price" : 1.45123, "stop_loss" : 1.2, "take_profit" : 1.7, "trailing_stop" : 10 },
            { "id" : 11, "units" : 100, "dir" : "S", "symbol" : "GBP/CAD", "time" : 1234567891, "price" : 1.45123, "stop_loss" : 1.2, "take_profit" : 1.7, "trailing_stop" : 10 }
        ]
    }
}


orders_data = {
    "EUR_USD" : {
        "open_orders" : [
            { "id" : 12, "type": "L", "symbol" : "EUR/USD", "units" : 100, "time" : 1234567890, "price" : 1.5, "stop_loss" : 1.2, "take_profit" : 1.7, "expiry" : 1234567890, "high_limit" : 2.0, "low_limit" : 1.0, "trailing_stop" : 10, "oca_group_id" : 1},
            { "id" : 13, "type": "L", "symbol" : "EUR/USD", "units" : 100, "time" : 1234567890, "price" : 1.5, "stop_loss" : 1.2, "take_profit" : 1.7, "expiry" : 1234567890, "high_limit" : 2.0, "low_limit" : 1.0, "trailing_stop" : 10, "oca_group_id" : 1},
        ]
    },
    "EUR_CAD" : {
        "open_orders" : [
            { "id" : 14, "type": "L", "symbol" : "EUR/CAD", "units" : 100, "time" : 1234567891, "price" : 1.5, "stop_loss" : 1.2, "take_profit" : 1.7, "expiry" : 1234567890, "high_limit" : 2.0, "low_limit" : 1.0, "trailing_stop" : 10, "oca_group_id" : 0},
        ]
    },
    "GBP_USD" : {
        "open_orders" : [
            { "id" : 15, "type": "L", "symbol" : "GBP/USD", "units" : 100, "time" : 1234567891, "price" : 1.5, "stop_loss" : 1.2, "take_profit" : 1.7, "expiry" : 1234567890, "high_limit" : 2.0, "low_limit" : 1.0, "trailing_stop" : 10, "oca_group_id" : 0},
            { "id" : 16, "type": "L", "symbol" : "GBP/USD", "units" : 100, "time" : 1234567891, "price" : 1.5, "stop_loss" : 1.2, "take_profit" : 1.7, "expiry" : 1234567890, "high_limit" : 2.0, "low_limit" : 1.0, "trailing_stop" : 10, "oca_group_id" : 0},
            { "id" : 17, "type": "L", "symbol" : "GBP/USD", "units" : 100, "time" : 1234567891, "price" : 1.5, "stop_loss" : 1.2, "take_profit" : 1.7, "expiry" : 1234567890, "high_limit" : 2.0, "low_limit" : 1.0, "trailing_stop" : 10, "oca_group_id" : 0},
            { "id" : 18, "type": "L", "symbol" : "GBP/USD", "units" : 100, "time" : 1234567891, "price" : 1.5, "stop_loss" : 1.2, "take_profit" : 1.7, "expiry" : 1234567890, "high_limit" : 2.0, "low_limit" : 1.0, "trailing_stop" : 10, "oca_group_id" : 0},
        ]
    },
    "GBP_CAD" : {
        "open_orders" : [
            { "id" : 19, "type": "L", "symbol" : "GBP/CAD", "units" : 100, "time" : 1234567891, "price" : 1.5, "stop_loss" : 1.2, "take_profit" : 1.7, "expiry" : 1234567890, "high_limit" : 2.0, "low_limit" : 1.0, "trailing_stop" : 10, "oca_group_id" : 0},
        ]
    }
}
