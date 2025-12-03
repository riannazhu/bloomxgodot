const { getDefaultConfig } = require('expo/metro-config');
const config = getDefaultConfig(__dirname);
config.resolver.assetExts.push('pck'); // Allows the bundler to see .pck files
module.exports = config;