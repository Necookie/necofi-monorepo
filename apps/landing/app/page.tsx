const Page = () => {
  return (
    <main
      style={{
        display: 'grid',
        placeItems: 'center',
        padding: '48px 24px',
      }}
    >
      <section
        style={{
          width: 'min(960px, 100%)',
          border: '1px solid rgba(148, 163, 184, 0.2)',
          borderRadius: 28,
          padding: '40px 32px',
          background: 'rgba(15, 23, 42, 0.55)',
          backdropFilter: 'blur(18px)',
          boxShadow: '0 24px 80px rgba(2, 6, 23, 0.45)',
        }}
      >
        <p
          style={{
            margin: 0,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            fontSize: 12,
            color: '#7dd3fc',
          }}
        >
          necofi.xyz
        </p>
        <h1
          style={{
            margin: '18px 0 16px',
            fontSize: 'clamp(3rem, 7vw, 5.75rem)',
            lineHeight: 0.95,
            maxWidth: 680,
          }}
        >
          Separate landing surface, separate product surface.
        </h1>
        <p
          style={{
            margin: 0,
            maxWidth: 620,
            fontSize: 18,
            lineHeight: 1.6,
            color: 'rgba(226, 232, 240, 0.86)',
          }}
        >
          This app is reserved for marketing, launch messaging, and public site
          pages. The product shell remains isolated in the web app.
        </p>
      </section>
    </main>
  );
};

export default Page;
