import React from 'react';
import './App.css'; // Asegúrate de que se importe el archivo de estilos

const App = () => {
  // Define el array de objetos con los datos de los coches
  const cars = [
    { Matricula: '1425BTY', Marca: 'Peugeot', Modelo: '3008', Tipo: 'híbrido' },
    { Matricula: '1762MNY', Marca: 'Mercedes', Modelo: 'EQS', Tipo: 'Diesel' },
    { Matricula: '9882TPK', Marca: 'Renault', Modelo: '4 E-Tech', Tipo: 'Eléctrico' },
    { Matricula: '6634TRV', Marca: 'Volkswagen', Modelo: 'Golf', Tipo: 'Gasolina' },
    { Matricula: '2285RPL', Marca: 'Toyota', Modelo: 'RAV4', Tipo: 'híbrido' },
    { Matricula: '1782PRT', Marca: 'Peugeot', Modelo: '5008', Tipo: 'diesel' },
  ]; 

  return (
    <div>
      {cars.map((car, index) => (
        <div key={index} className="StyledTextComponent">
          {`${car.Matricula} - ${car.Modelo} ${car.Marca} (${car.Tipo})`}
        </div>
      ))}
    </div>
  );
};

export default App;

