import { S3 } from '@aws-sdk/client-s3';

import env from '@/config/env';

const s3Client = new S3({
  forcePathStyle: false, // Configures to use subdomain/virtual calling format.
  endpoint: 'https://jackpot-file-data.nyc3.digitaloceanspaces.com',
  region: 'us-east-1',
  credentials: {
    accessKeyId: env.S3_SERVER_KEY,
    secretAccessKey: env.S3_SERVER_SECRET,
  },
});

export { s3Client };
