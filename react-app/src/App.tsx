import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequireAuth from './auth/RequireAuth/RequireAuth';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/first" element={<h1>Hello</h1>}></Route>
        <Route path="/second" element={<h1>Not Hello</h1>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
