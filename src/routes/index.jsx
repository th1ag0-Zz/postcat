import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Start } from '../pages/Start';
import { ConfirmCode } from '../pages/ConfirmCode';
import { Home } from '../pages/Home';

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Start />} />
        <Route path='/confirm-code' element={<ConfirmCode />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
