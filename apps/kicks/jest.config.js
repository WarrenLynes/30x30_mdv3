module.exports = {
  name: 'kicks',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/kicks',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
