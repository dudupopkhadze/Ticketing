module.exports = {
	testEnvironment: "node",
	setupFilesAfterEnv: ["setup.ts"],
	globals: {
		"ts-jest": {
			isolatedModules: true,
		},
	},
	preset: "ts-jest",
};
