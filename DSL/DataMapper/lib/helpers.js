const helpers = {
    isInModel: function (intentTitle, data) {
        const inModelIntents = data?.response?.inmodel?.response?.intents;
        return Array.isArray(inModelIntents) ? inModelIntents.includes(intentTitle) : false;
    },

    getCount: function (intentTitle, data) {
        const intentsWithCounts = data?.response?.count?.aggregations?.hot?.buckets || [];
        const intentData = intentsWithCounts.find((intent) => intent.key === intentTitle);
        return intentData ? intentData.examples_counts.value : 0;
    },
};

module.exports = {
    isInModel: helpers.isInModel,
    getCount: helpers.getCount,
};
