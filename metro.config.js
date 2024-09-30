const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const customConfig = {
    watchman: false, // watchman 비활성화
    maxWorkers: 2, // 워커 수 제한
    resolver: {
        sourceExts: ['js', 'json', 'ts', 'tsx'], // 프로젝트 파일 확장자
    },
    watchFolders: ['.'], // 현재 폴더에서 감시
};

module.exports = mergeConfig(defaultConfig, customConfig);
