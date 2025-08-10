# Build stage
FROM oven/bun:1 AS builder

WORKDIR /app

# Copy package files
COPY package.json ./
COPY bun.lockb ./

# Install ALL dependencies (including devDependencies)
RUN bun install --frozen-lockfile

# Copy source code
COPY . .

# Generate Prisma client (if you're using Prisma)
ENV PRISMA_SCHEMA_ENGINE_TYPE=binary
ENV PRISMA_QUERY_ENGINE_TYPE=binary
RUN bunx prisma generate

# Build the application
RUN bun run build

# Production stage
FROM oven/bun:1 AS runner

WORKDIR /app

# Copy package files
COPY package.json ./
COPY bun.lockb ./

# Install only production dependencies
RUN bun install --frozen-lockfile --production

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist
# Copy other necessary files (adjust paths as needed)
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["bun", "start"]