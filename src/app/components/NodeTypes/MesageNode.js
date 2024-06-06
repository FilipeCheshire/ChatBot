import React, { useState } from 'react';
import { TextField } from '@mui/material';
import Botao from '../Botão';

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
      <Botao onClick={onCancel} color="gray" label='Cancelar'/>
      <Botao onClick={handleSave} color="purple" label='Salvar' />
      </div>
    </>
  );
}

export default MensagemNode;
