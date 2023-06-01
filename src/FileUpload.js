import React, { useState } from 'react';


const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('archivos', selectedFile);

      try {
        const response = await fetch('/files', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          setUploadStatus('Archivo subido con éxito.');
        } else {
          setUploadStatus('Error al subir el archivo.');
        }
      } catch (error) {
        setUploadStatus('Error en la solicitud al backend.');
      }
    } else {
      setUploadStatus('Por favor, selecciona un archivo.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir archivo</button>
      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default FileUploadComponent;
