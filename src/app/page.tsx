export default function MaintenancePage() {
  return (
    <main
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      <div style={{ textAlign: 'center', maxWidth: '400px' }}>
        <p style={{ fontSize: '14px', color: '#999', marginBottom: '20px' }}>
          timberlinefallsut.com
        </p>
        <h1 style={{ fontSize: '18px', color: '#333', fontWeight: 'normal', marginBottom: '10px' }}>
          This site is currently unavailable.
        </h1>
        <p style={{ fontSize: '14px', color: '#777' }}>
          For inquiries, contact (801) 502-0306
        </p>
      </div>
    </main>
  );
}
