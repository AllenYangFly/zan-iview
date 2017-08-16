const IndexController = {

    async getIndexHtml(ctx) {
        await ctx.render('www/index/index.html');
    },

};

module.exports = IndexController;
