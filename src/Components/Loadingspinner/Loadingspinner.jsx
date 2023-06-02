import React from 'react';
import { LineWave } from 'react-loader-spinner';

const Loadingspinner = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-500px)]">
      <div>
        <LineWave
          width="300px"
          height="300px"
          color="red"
          firstLineColor="#1A1C1B"
          middleLineColor="#b7b095"
          lastLineColor="#1A1C1B"
        />
      </div>
     
    </div>
  );
};

export default Loadingspinner;