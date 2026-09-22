export default function RootNotFound() {
  return (
    <html lang="en">
      <body
        style={{
          backgroundColor: '#0B0B0D',
          color: '#F5F3EF',
          fontFamily: 'Inter, system-ui, sans-serif',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          margin: 0,
          padding: '1rem',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '28rem' }}>
          <div style={{ fontSize: '5rem', fontWeight: '300', color: '#C9A24B', marginBottom: '1rem', lineHeight: 1 }}>
            404
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
            Page not found
          </h1>
          <p style={{ color: '#A8A6A1', marginBottom: '2rem', lineHeight: '1.6' }}>
            This page doesn&apos;t exist. You may have followed an old link or typed the URL incorrectly.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/"
              style={{
                backgroundColor: '#C9A24B',
                color: '#0B0B0D',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Go Home
            </a>
            <a
              href="https://wa.me/966573067785?text=Hello%2C%20I%20need%20help%20with%20Umrah%20transport."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#4CAF7D',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
