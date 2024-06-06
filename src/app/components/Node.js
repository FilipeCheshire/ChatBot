import React from 'react';
import { Handle } from 'reactflow';

const CustomNode = ({ data }) => {
  return (
    <div style={{ border: '1px solid #000', borderRadius: '5px', background: '#fff', width: '300px', position: 'relative' }}>
      <div style={{ background: data.borderTop.split(' ')[2], color: '#fff', padding: '5px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', textAlign: 'center', fontWeight: 'bold' }}>
        {data.label}
      </div>
      <div style={{ padding: '10px' }}>
        {data.textoMensagem && <div>{data.textoMensagem}</div>}
        {data.destinatario && <div><strong>Destinatário:</strong> {data.destinatario}</div>}
        {data.assunto && <div><strong>Assunto:</strong> {data.assunto}</div>}
        {data.mensagem && <div><strong>Mensagem:</strong> {data.mensagem}</div>}
        {data.url && <div><strong>URL:</strong> {data.url}</div>}
        {data.metodoEnvio && <div><strong>Método de Envio:</strong> {data.metodoEnvio}</div>}
        {data.tempoEspera !== undefined && <div><strong>Tempo de Espera:</strong> {data.tempoEspera} min</div>}
        {data.cabecalhos && data.cabecalhos.length > 0 && (
          <div>
            <strong>Cabeçalhos:</strong>
            <ul>
              {data.cabecalhos.map((header, index) => (
                <li key={index}>{header.key}</li>
              ))}
            </ul>
          </div>
        )}
        {data.jsonEnvio && <div><strong>JSON de Envio:</strong> {data.jsonEnvio}</div>}
        {data.variaveisRetorno && <div><strong>Variáveis de Retorno:</strong> {data.variaveisRetorno}</div>}
        {data.mensagemResposta && <div><strong>Mensagem de Resposta:</strong> {data.mensagemResposta}</div>}
        {data.enviarResposta !== undefined && <div><strong>Enviar Resposta:</strong> {data.enviarResposta ? 'Sim' : 'Não'}</div>}
      </div>
      <Handle type="target" position="top" style={{ borderRadius: '50%', background: '#555' }} />
      <Handle type="source" position="bottom" style={{ borderRadius: '50%', background: '#555' }} />
    </div>
  );
};

export default CustomNode;
