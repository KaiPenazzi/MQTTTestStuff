module.exports = {
  apps: [
    {
      name: 'isBad',
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
