import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const nextConfig = (phase = '') => ({
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
  outputFileTracingRoot: new URL('.', import.meta.url).pathname,
});

export default nextConfig;
