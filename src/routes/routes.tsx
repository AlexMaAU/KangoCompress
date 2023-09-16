import React from 'react';
import { Route, Routes } from 'react-router-dom';
import English from '../pages/English';
import Chinese from '../pages/Chinese';

export function Routers() {
  return (
    <Routes>
      <Route path="/chinese" element={<Chinese />} />
      <Route path="/" element={<English />} />
    </Routes>
  );
}
