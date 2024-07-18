console.log('VITE_NODE_SERVER: ', import.meta.env.VITE_NODE_SERVER);
export default {
  NODE_SERVER: import.meta.env.VITE_NODE_SERVER ?? 'https://squid-app-mnx3d.ondigitalocean.app/',
  S3_SERVER_KEY: import.meta.env.VITE_S3_SERVER_KEY ?? '',
  S3_SERVER_SECRET: import.meta.env.VITE_S3_SERVER_SECRET ?? '',
  // Add other environment variables here
};
