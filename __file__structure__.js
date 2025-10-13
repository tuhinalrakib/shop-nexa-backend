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

 */