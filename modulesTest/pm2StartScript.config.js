module.exports = {
  apps: [
    {
      name: 'nuxt-app',
      script: 'npx',
      args: 'nuxi dev',
      interpreter: 'none',
      autorestart: false,
      watch: true,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
