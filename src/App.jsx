import React from 'react';
import CardProduct from './components/CardProduct';
import MobileLayout from './components/MobileLayout';

function Kiri() {
  return (
    <div
      className="kiri"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=600)`,
        backgroundSize: `cover`,
      }}
    ></div>
  );
}

function Kanan() {
  return (
    <div className="kanan">
      <h3 className="title">Sepatu</h3>
      <p className="price">Rp.500.000</p>
      <p className="desc">Nike Eric Koston</p>
      <button className="btn_buy">Beli</button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <MobileLayout>
        <h3>ini di dalam mobile layout</h3>
        <CardProduct left={<Kiri />} right={<Kanan />} />
      </MobileLayout>
    </div>
  );
}
