module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
				alias: {
					"_assets": "./src/assets",
					"_components": "./src/components",
					"_config": "./src/config",
					"_screens": "./src/screens",
					"_models": "./src/models",
					"_navigators": "./src/navigators",
					"_services": "./src/services",
					"_theme": "./src/theme",
					"_utils": "./src/utils",
					"_actions": "./src/actions",
					"_reducers": "./src/reducers",
					"_sagas": "./src/sagas",
					"_store": "./src/store"
				}
			}
		]
	]
};
