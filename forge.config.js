require('dotenv').config();
module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'mohit-sanwal',
          name: 'basic-Electron-App'
        },
        authToken: process.env.GITHUB_TOKEN,
        prerelease: false,
        draft: true
      }
    }
  ],
  packagerConfig: {
    asar: true,
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        certificateFile: './cert.pfx',
        certificatePassword: process.env.CERTIFICATE_PASSWORD
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
  ],
};
