import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function EmailNode({ onSave, onCancel }) {
  const [destinatario, setDestinatario] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleChangeDestinatario = (event) => setDestinatario(event.target.value);
  const handleChangeAssunto = (event) => setAssunto(event.target.value);
  const handleChangeMensagem = (event) => setMensagem(event.target.value);

  const handleSave = () => {
    if (destinatario.trim() && assunto.trim() && mensagem.trim()) {
      onSave({
        destinatario,
        assunto,
        mensagem,
      });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <>
      <TextField
        autoFocus
        margin="dense"
        label="Destinatário"
        type="text"
        fullWidth
        value={destinatario}
        onChange={handleChangeDestinatario}
      />
      <TextField
        margin="dense"
        label="Assunto"
        type="text"
        fullWidth
        value={assunto}
        onChange={handleChangeAssunto}
      />
      <TextField
        margin="dense"
        label="Mensagem"
        type="text"
        fullWidth
        value={mensagem}
        onChange={handleChangeMensagem}
      />
      <div>
        <Button onClick={onCancel} color="secondary">Cancelar</Button>
        <Button onClick={handleSave} color="primary">Salvar</Button>
      </div>
    </>
  );
}

export default EmailNode;
