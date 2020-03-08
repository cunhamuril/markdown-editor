import React from "react";

const Files = ({ files, handleOpenFile }) => (
  <div className="files-list-container">
    <h2>Arquivos</h2>

    {Object.keys(files).length === 0 ? (
      <p>Nenhum arquivo salvo</p>
    ) : (
      <ul>
        {/* Object.keys: transfomar Object em Array pegando as chaves */}
        {Object.keys(files).map(fileId => (
          <li key={fileId}>
            <button onClick={handleOpenFile(fileId)}>
              {files[fileId].title}
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default Files;
