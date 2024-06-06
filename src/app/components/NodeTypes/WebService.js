// WebServiceNode.js
import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

function WebServiceNode({ onSave, onCancel }) {
    const [url, setUrl] = useState('');
    const [metodoEnvio, setMetodoEnvio] = useState('POST');
    const [tempoEspera, setTempoEspera] = useState(0);
    const [cabecalhos, setCabecalhos] = useState([{ key: '', value: '' }]);
    const [jsonEnvio, setJsonEnvio] = useState('');
    const [variaveisRetorno, setVariaveisRetorno] = useState('');
    const [mensagemResposta, setMensagemResposta] = useState('');
    const [enviarResposta, setEnviarResposta] = useState(false);

    const handleRemoveCabecalho = (index) => setCabecalhos(cabecalhos.filter((_, i) => i !== index));
    const handleCabecalhoChange = (index, key, value) => {
        const newCabecalhos = [...cabecalhos];
        newCabecalhos[index][key] = value;
        setCabecalhos(newCabecalhos);
    };

    const handleAddCabecalho = () => {
        setCabecalhos([...cabecalhos, { key: '' }]);
    };


    const handleSave = () => {
        const nodeData = {
            url,
            metodoEnvio,
            tempoEspera,
            cabecalhos,
            jsonEnvio,
            variaveisRetorno,
            mensagemResposta,
            enviarResposta,
        };
        onSave(nodeData);
    };

    return (
        <>
            <TextField
                autoFocus
                margin="dense"
                label="URL"
                type="text"
                fullWidth
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <FormControl variant="outlined" fullWidth margin="dense" className=''>
                <InputLabel id="node-type-label">Método de Envio</InputLabel>
                <Select
                    id='node-type-label'
                    value={metodoEnvio}
                    label='Método de Envio'
                    onChange={(e) => setMetodoEnvio(e.target.value)}
                >
                    <MenuItem value="POST">POST</MenuItem>
                    <MenuItem value="GET">GET</MenuItem>
                    <MenuItem value="PUT">PUT</MenuItem>
                    <MenuItem value="DELETE">DELETE</MenuItem>
                </Select>
            </FormControl>
            <TextField className='pb-2'
                margin="dense"
                label="Tempo em minutos para aguardar o envio"
                type="number"
                fullWidth
                value={tempoEspera}
                onChange={(e) => setTempoEspera(Number(e.target.value))}
            />
            <div className='border rounded-md border-slate-400 p-2'>
                <Button onClick={handleAddCabecalho} color="primary">Adicionar Cabeçalho {'(HEADERS)'}</Button>
                {cabecalhos.map((header, index) => (
                    <div key={index}>
                        <TextField
                            className='w-full'
                            margin="dense"
                            label=""
                            type="text"
                            value={header.key}
                            onChange={(e) => handleCabecalhoChange(index, 'key', e.target.value)}
                        />
                        <Button onClick={() => handleRemoveCabecalho(index)} color="secondary">Remover</Button>
                    </div>
                    
                ))}
                
            </div>
            <TextField
                margin="dense"
                label="JSON de Envio"
                type="text"
                fullWidth
                value={jsonEnvio}
                onChange={(e) => setJsonEnvio(e.target.value)}
            />
            <TextField
                margin="dense"
                label="Variáveis de Retorno"
                type="text"
                fullWidth
                value={variaveisRetorno}
                onChange={(e) => setVariaveisRetorno(e.target.value)}
            />
            <TextField
                margin="dense"
                label="Mensagem de Resposta"
                type="text"
                fullWidth
                value={mensagemResposta}
                onChange={(e) => setMensagemResposta(e.target.value)}
            />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={enviarResposta}
                        onChange={(e) => setEnviarResposta(e.target.checked)}
                    />
                }
                label="Enviar Resposta"
            />
            <div>
                <Button onClick={onCancel} color="secondary">Cancelar</Button>
                <Button onClick={handleSave} color="primary">Salvar</Button>
            </div>
        </>
    );
}

export default WebServiceNode;
