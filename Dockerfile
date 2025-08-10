# Build stage
FROM node:alpine AS builder

# Install system dependencies including OpenSSL
RUN apk add --no-cache curl openssl libc6-compat

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy package files
COPY package.json ./

# Install ALL dependencies (including devDependencies)
RUN pnpm install
RUN pnpm add ai @ai-sdk/react @ai-sdk/openai

# Copy source code
COPY . .

# Set Prisma environment variables
ENV PRISMA_SCHEMA_ENGINE_TYPE=binary
ENV PRISMA_QUERY_ENGINE_TYPE=binary

# Generate Prisma client
RUN pnpm dlx prisma generate

# Build the application
RUN pnpm build

# Production stage
FROM node:alpine AS runner

# Install runtime dependencies including OpenSSL
RUN apk add --no-cache curl openssl libc6-compat

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Copy built application from builder stage
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Create non-root user for security
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Change ownership of the app directory
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]