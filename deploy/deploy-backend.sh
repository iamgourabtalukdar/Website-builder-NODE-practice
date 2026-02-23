set -e

git pull origin main

cd ../server
npm install
pm2 restart 2

echo "Backend deployed successfully!"