module.exports = {
    roots: ['<rootDir>/src'],
    transform: {'^.+\\.tsx?$': 'ts-jest'},
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    setupTestFrameworkScriptFile: '<rootDir>/src/setupEnzyme.ts',
};
