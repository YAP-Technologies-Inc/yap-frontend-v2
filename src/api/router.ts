import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
app.use(cors());

// ✅ Proxy /api/auth → http://localhost:8081/api/auth
// router.ts
app.use(
  '/api/auth',
  createProxyMiddleware({
    target: 'http://localhost:8081',
    changeOrigin: true,
    pathRewrite: {
      '^/api/auth': '', // strips /api/auth so it becomes /wallet/signup
    },
  })
);

// ✅ Proxy /profile → http://localhost:8080/profile
app.use(
  '/profile',
  createProxyMiddleware({
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: { '^/profile': '/profile' }, // keeps the /profile prefix
  })
);

app.listen(8000, () => {
  console.log('✅ API Gateway running at http://localhost:8000');
});
