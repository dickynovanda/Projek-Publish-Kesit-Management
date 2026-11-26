import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';
import { fileURLToPath } from 'node:url';

const nextConfig = (phase = '') => ({
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
  outputFileTracingRoot: fileURLToPath(new URL('.', import.meta.url)),
});

export default nextConfig;
