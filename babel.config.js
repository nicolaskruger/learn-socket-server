module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
		'@babel/preset-typescript',
	],
	plugins: [
		['module-resolver', {
			alias: {
				'@dto': './src/dto',
			},
		}],
	],
	ignore: [
		'**/*.spec.ts',
	],
};
