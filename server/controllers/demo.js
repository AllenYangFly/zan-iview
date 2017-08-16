import Demo1Service from '../services/demo1';
import Demo2Service from '../services/demo2';

const DemoController = {

    async findById(ctx) {
    	const id = ctx.params.id;
    	ctx.body = Demo1Service.findById(id);
    },

    async create(ctx) {
    	const data = ctx.getPostData();
    	ctx.body = Demo1Service.create(data);
    },

    async updateById(ctx) {

    },

    async deleteById(ctx) {

    }

};

module.exports = DemoController;
