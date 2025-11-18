import React from 'react';

function App() {
  // Header Component
  const Header = () => (
    <header style={styles.header}>
      <h1>My CRUD App</h1>
    </header>
  );

  // Footer Component
  const Footer = () => (
    <footer style={styles.footer}>
      <p>&copy; 2025 My CRUD App. All rights reserved.</p>
    </footer>
  );

  return (
    <div>
      <Header />

      <main style={styles.main}>
        <h2>Welcome to the CRUD App!</h2>
        <p>This is where your main content will go.</p>
      </main>

      <Footer />
    </div>
  );
}

// Inline Styles
const styles = {
  header: {
    backgroundColor: '#282c34',
    padding: '20px',
    color: 'white',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#f1f1f1',
    padding: '15px',
    marginTop: '20px',
    textAlign: 'center',
    color: '#333',
  },
  main: {
    padding: '20px',
    minHeight: '60vh',
  }
};

export default App;
