import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';

const data = [
  { time: '12:30', value: 'Normal' },
  { time: '12:32', value: 'Normal' },
  // ... more data points
  { time: '15:37', value: 'Normal' },
];

const states = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

const Dashboard = () => {
  const [selectedState, setSelectedState] = useState('GO');

  return (
    <div className="min-h-screen bg-navy-900 text-white p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">tecnospeed Monitor SEFAZ</h1>
        <div>
          <select className="bg-navy-800 p-2 rounded mr-2">
            <option>Gráfico de linha</option>
            <option>Por status</option>
          </select>
          <Button variant="outline" className="bg-green-700 hover:bg-green-600">
            Entrar
          </Button>
        </div>
      </header>

      <div className="mb-4">
        <Button variant="outline" className="mr-2 bg-green-700 hover:bg-green-600">
          NFe
        </Button>
        <Button variant="outline" className="mr-2 bg-green-700 hover:bg-green-600">
          NFCe
        </Button>
        <Button variant="outline" className="bg-green-700 hover:bg-green-600">
          CTe
        </Button>
      </div>

      <div className="grid grid-cols-9 gap-2 mb-4">
        {states.map((state) => (
          <Button
            key={state}
            variant={state === selectedState ? "default" : "outline"}
            className={`${state === selectedState ? 'bg-green-700' : 'bg-navy-800'} hover:bg-green-600`}
            onClick={() => setSelectedState(state)}
          >
            {state}
          </Button>
        ))}
      </div>

      <div className="bg-navy-800 p-4 rounded">
        <h2 className="text-xl mb-4">Tempo de resposta</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="time" stroke="#888888" />
            <YAxis stroke="#888888" />
            <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;