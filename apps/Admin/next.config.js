//@ts-check

 
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  // Use this to set Nx-specific options
  // See: https://nx.dev/recipes/next/next-config-setup
  // Disable Nx SVGR and configure manually
  nx: { svgr: false },
  experimental: {
    turbo: {
      resolveAlias: {},
    },
  },
  transpilePackages: [
    '@survey-app/styles',
    '@survey-app/ui',
    '@survey-app/utils',
    '@survey-app/types',
  ],
  // disable Webpack's filesystem cache in dev for both Next apps to suppress the "Unable to snapshot resolve dependencies" warning, 
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.cache = false;
    }
    // Add manual SVGR support
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/[jt]sx?$/] },
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: { svgo: true, titleProp: true, ref: true },
        },
      ],
    });
    return config;
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
