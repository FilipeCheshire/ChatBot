import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function MensagemNode({ onSave, onCancel }) {
  const [textoMensagem, setTextoMensagem] = useState('');

  const handleChangeTextoMensagem = (event) => setTextoMensagem(event.target.value);

  const handleSave = () => {
    if (textoMensagem.trim()) {
      onSave({
        textoMensagem,
      });
    } else {
      alert('Por favor, insira uma mensagem válida.');
    }
  };

  return (
    <>
      <TextField
        autoFocus
        margin="dense"
        label="Texto a ser enviado"
        type="text"
        fullWidth
        value={textoMensagem}
        onChange={handleChangeTextoMensagem}
      />
      <div>
        <Button onClick={onCancel} color="secondary">Cancelar</Button>
        <Button onClick={handleSave} color="primary">Salvar</Button>
      </div>
    </>
  );
}

export default MensagemNode;
