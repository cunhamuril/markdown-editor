import React from "react";
import PropTypes from "prop-types";

import Button from "../../components/button";
import SaveMessage from "../../components/save-message";

const MarkdownEditorHeader = ({
  title,
  isSaving,
  handleRemove,
  handleCreate,
  onChange
}) => (
  <header className="editor-header">
    <SaveMessage isSaving={isSaving} />

    <input
      type="text"
      value={title}
      placeholder="Sem título"
      onChange={onChange}
      className="input-title"
    />

    <Button onClick={handleCreate} kind="success">
      Criar novo
    </Button>

    <Button onClick={handleRemove} kind="danger">
      Remover
    </Button>
  </header>
);

MarkdownEditorHeader.propTypes = {
  title: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleCreate: PropTypes.func.isRequired
};

export default MarkdownEditorHeader;
