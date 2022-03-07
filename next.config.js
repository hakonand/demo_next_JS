module.exports = ({ defaultConfig }) => {
	/**
	 * @type {import('next').NextConfig}
	 */
	const nextConfig = {
		/* config options here */

		images: {
			domains: ['firebasestorage.googleapis.com'],
		},
	}
	return nextConfig
}
