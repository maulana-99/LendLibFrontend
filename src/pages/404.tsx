import React from 'react';

const PageNotFound = () => {
  return (
    <div style={{
      width: '80%',
      margin: '40px auto',
      textAlign: 'center',
    }}>
      <div style={{
        fontSize: '120px',
        fontWeight: 'bold',
        color: '#333',
      }}>
        404
      </div>
      <div style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#666',
        marginBottom: '20px',
      }}>
        Halaman Tidak Ditemukan
      </div>
      <div style={{
        fontSize: '18px',
        color: '#999',
        marginBottom: '40px',
      }}>
        Maaf, halaman yang Anda cari tidak ditemukan. Silakan coba lagi atau kembali ke halaman utama.
      </div>
      <div style={{
        marginTop: '40px',
      }}>
        <button style={{
          backgroundColor: '#4CAF50',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => window.location.href = '/'}>
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;