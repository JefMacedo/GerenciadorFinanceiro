const { z } = require("zod");

exports.salesValidation = z.object({
    coin: z.string(),
    date_purchase: z.string(),
    value_purchase: z.number(),
    unity_purchase: z.number(),
    total_money_purchase: z.number(),
});

exports.updateSalesValidation = z.object({
    value_sale: z.number(),
    data_sale: z.string(),
    unity_sale: z.number(),
    total_money_sale: z.number(),
    profit: z.number(),
})