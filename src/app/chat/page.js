'use client';

import React, { useCallback, useState } from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import CustomNode from '../components/Node';
import EmailNode from '../components/NodeTypes/EmailNode';
import MensagemNode from '../components/NodeTypes/MesageNode';
import WebServiceNode from '../components/NodeTypes/WebService';
import Botao from '../components/Botão';
import Respostas from '../components/NodeTypes/Resposta'
import RespostaNode from '../components/AnswerNode';

const tiposDeNos = {
  custom: CustomNode,
  reposta: RespostaNode,
};

const dadosTiposDeNos = [
  { id: 'a', label: 'Enviar uma mensagem', borderTop: '10px solid pink' },
  { id: 'b', label: 'Enviar um email', borderTop: '10px solid blue' },
  { id: 'c', label: 'Enviar um webservice', borderTop: '10px solid orange' },
  { id: 'd', label: 'Resposta', borderTop: '10px solid red' },
  { id: 'e', label: 'Enviar para um humano', borderTop: '10px solid purple' },
  { id: 'f', label: 'Parar interação', borderTop: '10px solid green' },
  { id: 'g', label: 'Lista de Mensagens', borderTop: '10px solid violet' },
];

const nosIniciais = [];
const arestasIniciais = [];

function Fluxo() {
  const [nos, setNos] = useState(nosIniciais);
  const [arestas, setArestas] = useState(arestasIniciais);
  const [abrirDialogo, setAbrirDialogo] = useState(false);
  const [tipoDeNo, setTipoDeNo] = useState('');
  const [abrirDialogoTipo, setAbrirDialogoTipo] = useState(false);

  const handleAbrirDialogoTipo = () => setAbrirDialogoTipo(true);
  const handleFecharDialogos = () => {
    setAbrirDialogoTipo(false);
    setAbrirDialogo(false);
  };

  const handleChangeTipoDeNo = (event) => setTipoDeNo(event.target.value);

  const onNosChange = useCallback(
    (changes) => setNos((nds) => applyNodeChanges(changes, nds)),
    [setNos]
  );
  const onArestasChange = useCallback(
    (changes) => setArestas((eds) => applyEdgeChanges(changes, eds)),
    [setArestas]
  );

  const onConectar = useCallback(
    (connection) => setArestas((eds) => addEdge(connection, eds)),
    [setArestas]
  );

  const confirmarAdicionarNo = (nodeData) => {
    if (nodeData) {
      const tipoSelecionado = dadosTiposDeNos.find(type => type.id === tipoDeNo);
      if (tipoSelecionado) {
        const id = `${nos.length + 1}`;
        const novoNo = {
          id,
          type: tipoSelecionado.label === 'Resposta' ? 'resposta' : 'custom',
          position: { x: 300, y: 200 },
          data: {
            label: tipoSelecionado.label,
            borderTop: tipoSelecionado.borderTop,
            ...nodeData,
          },
        };
        setNos([...nos, novoNo]);
        setTipoDeNo('');
        handleFecharDialogos();
      } else {
        alert('Por favor, selecione um tipo de nó válido.');
      }
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  const adicionarNo = useCallback(() => {
    handleAbrirDialogoTipo();
  }, [handleAbrirDialogoTipo]);

  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex flex-col w-full'>
        <Header />
        <div className='bg-slate-400 h-12 flex flex-row justify-end'>
        <Botao color='purple' label='Novo nó' onClick={adicionarNo} />
        </div>
        <div className='p-5' style={{ height: 'calc(100vh - 7rem)' }}>
          <div className='h-full border rounded-lg border-violet-950'>
            <ReactFlow
              className='bg-white rounded-lg'
              nodes={nos}
              edges={arestas}
              onNodesChange={onNosChange}
              onEdgesChange={onArestasChange}
              onConnect={onConectar}
              fitView
              nodeTypes={tiposDeNos}
            >
              <Background />
            </ReactFlow>
          </div>
        </div>
      </div>
      <Dialog open={abrirDialogoTipo} onClose={handleFecharDialogos} maxWidth="sm" fullWidth>
        <DialogTitle>Qual tipo do nó?</DialogTitle>
        <DialogContent>
          <FormControl variant="outlined" fullWidth margin="dense">
            <InputLabel id="node-type-label">Tipo do Nó</InputLabel>
            <Select
              labelId="node-type-label"
              value={tipoDeNo}
              onChange={handleChangeTipoDeNo}
              label="Tipo do Nó"
              fullWidth
            >
              {dadosTiposDeNos.map((type) => (
                <MenuItem key={type.id} value={type.id}>{type.label}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFecharDialogos} color="secondary">Cancelar</Button>
          <Button onClick={() => { setAbrirDialogoTipo(false); setAbrirDialogo(true); }} color="primary">Próximo</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={abrirDialogo} onClose={handleFecharDialogos} maxWidth="sm" fullWidth>
        <DialogTitle>Adicionar um Nó</DialogTitle>
        <DialogContent>
          {tipoDeNo && (
            <>
              {tipoDeNo === 'a' && (
                <MensagemNode
                  onSave={(nodeData) => confirmarAdicionarNo(nodeData)}
                  onCancel={handleFecharDialogos}
                />
              )}
              {tipoDeNo === 'b' && (
                <EmailNode
                  onSave={(nodeData) => confirmarAdicionarNo(nodeData)}
                  onCancel={handleFecharDialogos}
                />
              )}
              {tipoDeNo === 'c' && (
                <WebServiceNode
                  onSave={(nodeData) => confirmarAdicionarNo(nodeData)}
                  onCancel={handleFecharDialogos}
                />
              )}
              {tipoDeNo === 'd' && (
                <Respostas
                  onSave={(nodeData) => confirmarAdicionarNo(nodeData)}
                  onCancel={handleFecharDialogos}
                />
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Fluxo;
