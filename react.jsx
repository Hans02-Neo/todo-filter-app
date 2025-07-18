import { useState } from 'react';

function Counter() {
  const [nama, setNama] = useState("Belum diisi");

  return (
    <div>
      <h2>Fat-han Kurnia Mubina {nama}</h2>
      <button onClick={() => setNama("Fat-han Kurnia Mubina")}>Isi Nama</button>
      <button onClick={() => setNama("Belum diisi")}>Kosongkan</button>
      <button onClick={() => setNama(0)}>Reset</button>
    </div>
  );
}

export default GantiNama;
