/** @type {import('next').NextConfig} */
const nextConfig = {
    env: { NEXT_RESEND_API_KEY: process.env.NEXT_RESEND_API_KEY },
}

module.exports = nextConfig
