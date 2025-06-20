import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [files, setFiles] = useState([]);
  const [uploaded, setUploaded] = useState([]);

  function handleSelect(e) {
    setFiles(e.target.files);
  }

  async function handleUpload() {
    const formData = new FormData();
    for (const file of files) {
      formData.append('files', file);
    }
    const res = await fetch('/upload', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    setUploaded(data.files);
    setFiles([]);
  }

  function handleDelete(filename) {
    fetch(`/delete/${filename}`, {
      method: 'DELETE'
    }).then(() => {
      setUploaded(prev => prev.filter(f => f.filename !== filename));
    });
  }

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Gerenciador</h2>
        <nav>
          <ul>
            <li className="active">Arquivos</li>
            <li className="disabled">Configurações</li>
            <li className="disabled">Usuário</li>
          </ul>
        </nav>
      </aside>
      <main>
        <h1>Sistema de Distribuição de Arquivos</h1>
        <input type="file" multiple onChange={handleSelect} />
        <button onClick={handleUpload} disabled={!files.length}>Enviar</button>
        <section className="upload-list">
          {uploaded.length === 0 ? (
            <p>Nenhum arquivo enviado ainda.</p>
          ) : (
            <ul>
              {uploaded.map(file => (
                <li key={file.filename}>
                  <a href={`/uploads/${file.filename}`} target="_blank" rel="noopener noreferrer">
                    {file.originalname}
                  </a>
                  <button onClick={() => handleDelete(file.filename)}>Excluir</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
