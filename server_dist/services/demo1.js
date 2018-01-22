'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
 * Service 层写法1
 */

const DemoService = {

	findById(id) {
		return _asyncToGenerator(function* () {
			return {
				code: 0,
				msg: 'ok',
				data: {
					id: 1,
					title: 'todo title',
					description: 'todo description'
				}
			};
		})();
	},

	create(data) {
		return _asyncToGenerator(function* () {
			return {
				code: 0,
				msg: 'ok',
				data: {
					id: 1,
					title: 'todo title',
					description: 'todo description'
				}
			};
		})();
	}

};

module.exports = DemoService;