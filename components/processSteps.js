import React, { useEffect, useState } from 'react';

const ProcessSteps = () => {
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    const fetchSteps = async () => {
      try {
        const response = await fetch('/data/processSteps.json');
        const data = await response.json();
        setSteps(data);
      } catch (error) {
        console.error('Error fetching steps data:', error);
      }
    };

    fetchSteps();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white">
      <h2 className="text-3xl font-extrabold mb-8 md:mb-12 lg:mb-14 text-blue-950">Süreç Nasıl İşliyor?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center text-center bg-white h-full">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-blue-900 mr-2">{step.id}</span>
              <img src={step.image} alt={`Step ${step.id}`} className="w-16 h-16 mx-auto" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-blue-950">{step.title}</h4>
            <p className="flex-grow text-sm font-semibold text-blue-900 whitespace-pre-line">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
