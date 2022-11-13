import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListKaryawan from '../Pages/admin/ListKaryawan';
import ListPeserta from '../Pages/admin/ListPeserta';
import Sidebar from '../Components/Sidebar';
import Loginadmin from '../Pages/LoginAdmin';

const AdminRoute = () => {
  return (
    <>
      <Sidebar>
        <Routes>
          <Route path={`/list_karyawan`} element={<ListKaryawan />} />
          <Route path={`/list_peserta`} element={<ListPeserta />} />
        </Routes>
        <Route path={`/list_peserta`} element={<ListPeserta />} />
      </Sidebar>
    </>
  );
};

export default AdminRoute;
