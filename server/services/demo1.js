/**
 * Service 层写法1
 */

const DemoService = {

	async findById(id) {
		return {
			code: 0,
			msg: 'ok',
			data: {
				id: 1,
				title: 'todo title',
				description: 'todo description'
			}
		}
	},

	async create(data) {
		return {
			code: 0,
			msg: 'ok',
			data: {
				id: 1,
				title: 'todo title',
				description: 'todo description'
			}
		}
	}

};

module.exports = DemoService;
