/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp3|wav)$/, // Match .mp3 and .wav files
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/sounds', // Public path for the files
            outputPath: 'static/sounds',       // Output directory in the build
            name: '[name].[hash].[ext]',       // Naming pattern for the files
          },
        },
      });
      return config;
    },
  };
  
  export default nextConfig;
  