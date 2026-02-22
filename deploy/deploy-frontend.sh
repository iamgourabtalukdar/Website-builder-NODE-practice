set -e

git pull origin main

# cd ../client
cd /home/ubuntu/Website-builder-NODE-practice/client
npm i
#npm run test
npm run build
aws s3 cp dist/ s3://dnd-website-builder-client/ --recursive
aws cloudfront create-invalidation --distribution-id E10WZC49Q2OVS0 --paths "/index.html"