import type { OGTemplateProps } from "./types"

export function MinimalBlogTemplate({
  title,
  author,
  date,
  readingTime,
  category,
  accentColor = "#1a1a1a",
  bgColor = "#fafaf9",
}: OGTemplateProps) {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: bgColor,
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
      }}
    >
      {/* Subtle accent line at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: `linear-gradient(90deg, ${accentColor} 0%, ${accentColor}99 100%)`,
        }}
      />

      {/* Main content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          height: "100%",
        }}
      >
        {/* Header with category */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {category && (
            <div
              style={{
                display: "flex",
                fontSize: "20px",
                fontWeight: "600",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: accentColor,
                opacity: 0.8,
              }}
            >
              {category}
            </div>
          )}

          {/* Title - Large, elegant serif */}
          <h1
            style={{
              fontSize: "72px",
              fontWeight: "700",
              lineHeight: 1.1,
              color: accentColor,
              margin: 0,
              maxWidth: "90%",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>
        </div>

        {/* Footer metadata */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `2px solid ${accentColor}20`,
            paddingTop: "32px",
          }}
        >
          {/* Author and date */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {author && (
              <div
                style={{
                  fontSize: "28px",
                  fontWeight: "600",
                  color: accentColor,
                }}
              >
                {author}
              </div>
            )}
            {date && (
              <div
                style={{
                  fontSize: "24px",
                  color: accentColor,
                  opacity: 0.6,
                }}
              >
                {date}
              </div>
            )}
          </div>

          {/* Reading time badge */}
          {readingTime && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "22px",
                color: accentColor,
                opacity: 0.7,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={accentColor}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {readingTime}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
