module.exports = {
    webpack: (config, { isServer }) => {

      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        config.node = {
          fs: 'empty',
        }
      }
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();

        const keys = Object.keys(entries);
        keys.forEach(key => {
          if (key.includes('/__generated__/')) {
            delete entries[key];
          }
        });

        return entries;
      };
      
  
      return config
    },
    images: {
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
  }