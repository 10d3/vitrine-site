# Stage 1: Build
FROM node:alpine AS builder

# Install dependencies
RUN apk add --no-cache curl openssl

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy and install dependencies
COPY package.json ./
RUN pnpm install

# Copy the rest of the app
COPY . .

# Generate Prisma client
ENV PRISMA_SCHEMA_ENGINE_TYPE=binary
ENV PRISMA_QUERY_ENGINE_TYPE=binary
RUN pnpm dlx prisma generate

# Build Next.js app
RUN pnpm build

# Stage 2: Production
FROM node:alpine AS runner

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

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:3000/api/health || exit 1

# Expose port
EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
