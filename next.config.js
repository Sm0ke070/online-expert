/** @type {import('next').NextConfig} */
const path = require('path');

//const nextConfig = {};

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*', // FIX доступ всем доменам для загрузки изображений
            },
        ],
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
};
