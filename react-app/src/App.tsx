import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequireAuth from './auth/RequireAuth/RequireAuth';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/first">Hello</Route>
        <Route path="/second">Not Hello</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
