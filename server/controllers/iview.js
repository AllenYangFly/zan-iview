const IviewController = {
    async getIndexHtml(ctx) {
        await ctx.render('www/view/index.html');
    },
    async getRootIndexHtml(ctx) {
        await ctx.render('www/viewroot/index.html');
    },
    async getZanIviewHtml(ctx) {
        await ctx.render('www/zaniview/index.html');
    }
};

module.exports = IviewController;
