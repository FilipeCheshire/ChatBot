import React, { useState } from 'react';
import { TextField, Checkbox, FormControl, InputLabel, Select, MenuItem, FormControlLabel } from '@mui/material';
import Botao from '../Botão';

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
        <div>
            <div>
                <FormControlLabel
                    control={<Checkbox />}
                    label="Salvar resposta como variável"
                />
            </div>
            <div className="bg-cyan-100 p-2.5 rounded-md mb-2.5">
                Preencha a lista abaixo com as respostas que podem ser enviadas e que você deseja tratar.
            </div>
            <div className='bg-yellow-100 p-2.5 rounded-md mb-2.5'>
                A opção "Dinâmico" está disponível apenas para as categorias "for igual a" e "possuir todas as palavras"
            </div>
            <div className='flex justify-center pb-2'>
                <Botao color="purple" onClick={handleAddResponse} label='Adicionar categoria' />
            </div>
            {responses.map((response, index) => (
                <div key={index} className='border border-slate-400 p-3'>
                    <div>
                        <TextField
                            label="Categorizar resposta como"
                            value={response.category}
                            onChange={(e) => handleChange(index, 'category', e.target.value)}
                            fullWidth
                        />
                    </div>
                    <div className='flex justify-items-center mt-2'>
                        <FormControl variant="outlined" className='w-56 mr-2'>
                            <InputLabel>Dinâmico</InputLabel>
                            <Select
                                value={response.dynamicOption}
                                onChange={(e) => handleChange(index, 'dynamicOption', e.target.value)}
                                label='Dinâmico'
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
                            className='w-20'
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
                    <Botao color="gray" onClick={() => handleRemoveResponse(index)} label='Remover categoria' />
                </div>
            ))}
            <div style={{ marginTop: '10px' }}>
                <Botao onClick={handleSave} color="purple" variant="contained" label='Salvar' />
                <Botao onClick={onCancel} color="gray" variant="outlined" style={{ marginLeft: '10px' }} label='Cancelar' />
            </div>
        </div>
    );
}

export default Respostas;
