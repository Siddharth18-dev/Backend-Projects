// tokenRateLimiter.js

const buckets = new Map(); // { identifier: { tokens, lastRefillTime } }

const BUCKET_CAPACITY = 10;       // max tokens
const REFILL_RATE = 5 / 60_000;   // tokens per ms (5 tokens per minute)

export function tokenRateLimiter(req, res, next) {
  const user = req.ip; // or req.user.id if JWT-authenticated
  const currentTime = Date.now();

  let bucket = buckets.get(user);

  if (!bucket) {
    bucket = { tokens: BUCKET_CAPACITY, lastRefillTime: currentTime };
    buckets.set(user, bucket);
  }

  // Refill tokens based on elapsed time
  const elapsed = currentTime - bucket.lastRefillTime;
  const refillTokens = elapsed * REFILL_RATE;
  bucket.tokens = Math.min(BUCKET_CAPACITY, bucket.tokens + refillTokens);
  bucket.lastRefillTime = currentTime;

  if (bucket.tokens < 1) {
    return res.status(429).json({ message: "Too many requests. Please slow down." });
  }

  // Consume one token
  bucket.tokens -= 1;
  buckets.set(user, bucket);

  next();
}
