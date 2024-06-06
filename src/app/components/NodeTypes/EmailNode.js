import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Botao from '../Botão';

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
        <Botao onClick={onCancel} color="gray" label='Cancelar'/>
        <Botao onClick={handleSave} color="purple" label='Salvar' />
      </div>
    </>
  );
}

export default EmailNode;
