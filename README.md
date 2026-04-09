
# Diary API

## Chạy local
npm install
node server.js

## Deploy Render
1. Upload repo lên GitHub
2. Vào https://render.com
3. New Web Service → chọn repo
4. Start command: node server.js

## API

GET / → root  
GET /api/diaries → list  
POST /api/diaries → add  
PUT /api/diaries/:id → update  
DELETE /api/diaries/:id → delete  
