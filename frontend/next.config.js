/** @type {import('next').NextConfig} */
const nextConfig = {
	compiler: {
		styledComponents: true,
	},
	images: {
		unoptimized: true,
	},
	// Enable build caching
	experimental: {
		turbotrace: {
			logLevel: 'error',
			memoryLimit: 4000,
		},
	},
	// Configure output for better caching
	output: 'standalone',
	// Enable granular chunks
	productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
