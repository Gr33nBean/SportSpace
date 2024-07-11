/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_BASE_URL: "https://jsonplaceholder.typicode.com",
    FIREBASE_API_KEY: 'AIzaSyC20wLu8nFT5YujH9_wWb-G7JGpR3BpCNE',
    FIREBASE_AUTH_DOMAIN: 'tobogo-court.firebaseapp.com',
    FIREBASE_PROJECT_ID: 'tobogo-court',
    FIREBASE_STORAGE_BUCKET: 'tobogo-court.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '275793391377',
    FIREBASE_APP_ID: '1:275793391377:web:465b4126a162b5f44366b0',
    FIREBASE_MEASUREMENT_ID: 'G-DBGDW4L74B'
  }
};

export default nextConfig;
