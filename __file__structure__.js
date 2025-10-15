/**
 * backend/
│
├── src/
│   ├── config/
│   │   ├── db.js                  # MongoDB connection
│   │   ├── redis.js               # Redis connection and caching helper
│   │   └── env.js                 # Environment variable config
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js      # JWT verification, role check
│   │   ├── errorHandler.js        # Centralized error handling
│   │   ├── rateLimiter.js         # Rate limiting using Redis
│   │   └── validateRequest.js     # Joi or Zod schema validation
│   │   └── sanitize.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Plan.js
│   │   ├── Invoice.js
│   │   └── Session.js (optional)
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   ├── hostingRoutes.js
│   │   ├── adminRoutes.js
│   │   └── index.js               # Combine all routes
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── propertyController.js
│   │   └── ...
│   │
│   ├── services/
│   │   ├── authService.js         # Business logic for Auth
│   │   ├── paymentService.js
│   │   ├── hostingManager.js
│   │   └── cacheService.js        # Redis caching helper
│   ├── jobs/                      # background jobs for billing, cleanup (bullMQ)
│   ├── utils/
│   │   ├── jwt.js                 # Sign/verify tokens
│   │   ├── logger.js              # Winston or custom logger
│   │   ├── sendEmail.js           # Nodemailer setup
│   │   ├── response.js            # Standard API response format
│   │   └── constants.js
│   │
│   ├── app.js                     # Express app setup
│   └── server.js                  # Server start point
│
├── .env
├── package.json
└── README.md

PORT=4000
MONGO_URI = mongodb+srv://hosting:AfxYo6dkUw7pTn8p@cluster.gnlwsvv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster
REDIS_URL = redis://127.0.0.1:6379
# JWT SECRET
JWT_ACCESS_SECRET = yshshshshjsdhisasbjhasdjhasdjkasdhjsd
JWT_REFRESH_SECRET = sgdhsghsgdysdhasgyuasasdgyasdyuasd
RATE_LIMIT_WINDOW_MS = 60000
RATE_LIMIT_MAX= 100
RESEND_API_KEY= re_YQBPPEmD_6hm4uuqwxv1pB9qpVFg5aX9T
NEXTAUTH_URL = http://localhost:4000/api/auth

 */