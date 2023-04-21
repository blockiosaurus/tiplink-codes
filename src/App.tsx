import React, { useEffect, useState } from 'react';
import logo from './logo.png';
import './App.css';
import { QRCode } from 'react-qrcode-logo';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

function App() {
  const [files, setFiles] = useState<string | ArrayBuffer | null | undefined>("{}");
  const [fileArray, setFileArray] = useState<string[]>([]);

  const handleChange = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target?.result);
      setFiles(e.target?.result);
    };
  };

  useEffect(() => {
    let fileArray = JSON.parse(files as string);
    console.log("fileArray", fileArray);
    setFileArray(fileArray);
    // console.log(typeof files);
  }, [files]);

  return (
    <div className="App">
      <input type="file" onChange={handleChange} />
      <Grid2 container spacing={2} columns={3}>
        {Array.from(fileArray).map((file, index) => (
        <QRCode
          value={file}
          size={216}
          bgColor={'transparent'}
          fgColor={'black'}
          logoImage={logo}
          logoWidth={60}
          logoHeight={60}
          eyeRadius={12}
          eyeColor={'black'}
        />))}
      </Grid2>
    </div>
  );
}

export default App;
