FROM oven/bun:1 AS builder

RUN apk add --no-cache curl openssl


WORKDIR /app

COPY package.json bun.lockb ./

RUN bun install --frozen-lockfile

COPY . .

# Generate Prisma client
ENV PRISMA_SCHEMA_ENGINE_TYPE=binary
ENV PRISMA_QUERY_ENGINE_TYPE=binary
RUN bunx -bun prisma generate

RUN bun run build

FROM oven/bun:1 AS runner

# Install runtime dependencies
RUN apk add --no-cache curl openssl

WORKDIR /app

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Copy only necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Create a non-root user
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs
USER nextjs

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]