// RespostaNode.js
import React from 'react';
import { Handle } from 'reactflow';

const RespostaNode = ({ data }) => {
  return (
    <div style={{ border: '1px solid #000', borderRadius: '5px', background: '#fff', width: '300px', position: 'relative' }}>
      <div style={{ background: data.borderTop?.split(' ')[2] || '#000', color: '#fff', padding: '5px', borderTopLeftRadius: '5px', borderTopRightRadius: '5px', textAlign: 'center', fontWeight: 'bold' }}>
        {data.label}
      </div>
      <div style={{ padding: '10px' }}>
        {data.responses && data.responses.length > 0 ? (
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
            {data.responses.map((response, index) => (
              <div key={index} style={{ margin: '5px' }}>
                <div>{response.category}</div>
              </div>
            ))}
          </div>
        ) : (
          <div>Nenhuma resposta disponível</div>
        )}
      </div>
      <Handle type="target" position="top" style={{ borderRadius: '50%', background: '#555' }} />
      <Handle type="source" position="bottom" style={{ borderRadius: '50%', background: '#555' }} />
    </div>
  );
};

export default RespostaNode;
