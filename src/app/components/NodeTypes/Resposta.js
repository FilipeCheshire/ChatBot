import React, { useState } from 'react';
import { TextField, Checkbox, FormControl, InputLabel, Select, MenuItem, Button, FormControlLabel } from '@mui/material';

function Respostas({ onSave, onCancel }) {
    const [responses, setResponses] = useState([
        { category: '', dynamicOption: '', condition: '', isVariable: false, isLogic: false, value: '' },
    ]);

    const handleAddResponse = () => {
        setResponses([...responses, { category: '', dynamicOption: '', condition: '', isVariable: false, isLogic: false, value: '' }]);
    };

    const handleRemoveResponse = (index) => {
        setResponses(responses.filter((_, i) => i !== index));
    };

    const handleChange = (index, field, value) => {
        const newResponses = [...responses];
        newResponses[index][field] = value;
        setResponses(newResponses);
    };

    const handleSave = () => {
        onSave({ responses });
    };

    return (
        <div style={{ padding: '20px' }}>
            <div>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Salvar resposta como variável"
                />
            </div>
            <div style={{ backgroundColor: '#e0f7fa', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                Preencha a lista abaixo com as respostas que podem ser enviadas e que você deseja tratar.
            </div>
            <div style={{ backgroundColor: '#fff9c4', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
                A opção "Dinâmico" está disponível apenas para as categorias "for igual a" e "possuir todas as palavras"
            </div>

            {responses.map((response, index) => (
                <div key={index} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                    <div>
                        <TextField
                            label="Categorizar resposta como"
                            value={response.category}
                            onChange={(e) => handleChange(index, 'category', e.target.value)}
                            fullWidth
                        />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                        <FormControl style={{ flex: 1, marginRight: '10px' }}>
                            <InputLabel>Dinâmico</InputLabel>
                            <Select
                                value={response.dynamicOption}
                                onChange={(e) => handleChange(index, 'dynamicOption', e.target.value)}
                            >
                                <MenuItem value="for um número maior que">for um número maior que</MenuItem>
                                <MenuItem value="for um número igual a">for um número igual a</MenuItem>
                                <MenuItem value="possuir alguma palavra">possuir alguma palavra</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Valor"
                            value={response.value}
                            onChange={(e) => handleChange(index, 'value', e.target.value)}
                            style={{ flex: 1, marginRight: '10px' }}
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={response.isVariable}
                                onChange={(e) => handleChange(index, 'isVariable', e.target.checked)}
                            />}
                            label="Variável"
                        />
                        <FormControlLabel
                            control={<Checkbox
                                checked={response.isLogic}
                                onChange={(e) => handleChange(index, 'isLogic', e.target.checked)}
                            />}
                            label="E(lógico)"
                        />
                    </div>
                    <Button color="secondary" onClick={() => handleRemoveResponse(index)}>Remover categoria</Button>
                </div>
            ))}
            
            <Button color="primary" onClick={handleAddResponse}>Adicionar categoria</Button>
            <div style={{ marginTop: '10px' }}>
                <Button onClick={handleSave} color="primary" variant="contained">Salvar</Button>
                <Button onClick={onCancel} color="secondary" variant="outlined" style={{ marginLeft: '10px' }}>Cancelar</Button>
            </div>
        </div>
    );
}

export default Respostas;
