module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          Assets: ["./src/assets"],
          Components: ["./src/components"],
          Constants: ["./src/constants"],
          Helper: ["./src/helper"],
          Navigation: ["./src/navigation"],
          Services: ["./src/services"],
          Screens: ["./src/screens"],
          Theme: ["./src/theme"]
        },
        extensions: ['.js', '.json', '.ts', '.tsx'],
      },
      '@babel/plugin-syntax-dynamic-import',
    ],
    'react-native-reanimated/plugin',
  ]
};
