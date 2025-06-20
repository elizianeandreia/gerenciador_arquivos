import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [files, setFiles] = useState([]);

  function handleUpload(e) {
    const uploadedFiles = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < uploadedFiles.length; i++) {
      formData.append('files', uploadedFiles[i]);
    }
    fetch('http://localhost:4000/upload', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        const newFiles = data.files.map(file => ({
          id: Date.now() + Math.random(),
          name: file.originalname,
          size: file.size,
          type: file.mimetype,
          url: `http://localhost:4000/${file.filename}`,
        }));
        setFiles(prev => [...newFiles, ...prev]);
      })
      .catch(console.error);
  }

  function handleDelete(id) {
    setFiles(prev => prev.filter(file => file.id !== id));
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Gerenciador</h2>
        <nav>
          <ul>
            <li className="active">Arquivos</li>
            <li>
              <button disabled>Configurações</button>
            </li>
            <li>
              <button disabled>Usuário</button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h1>Sistema de Distribuição de Arquivos</h1>
        </header>

        <section className="upload-section">
          <input type="file" multiple onChange={handleUpload} id="upload-input" />
          <label htmlFor="upload-input" className="upload-label">
            Selecione arquivos para upload
          </label>
        </section>

        <section className="files-section">
          {files.length === 0 ? (
            <p className="empty-msg">Nenhum arquivo enviado.</p>
          ) : (
            <ul className="files-list">
              {files.map(file => (
                <li key={file.id} className="file-card">
                  <div className="file-info">
                    <div className="file-icon">📄</div>
                    <div>
                      <strong>{file.name}</strong>
                      <p>{(file.size / 1024).toFixed(2)} KB</p>
                      <a href={file.url} target="_blank" rel="noopener noreferrer">
                        Abrir
                      </a>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(file.id)}>Excluir</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
