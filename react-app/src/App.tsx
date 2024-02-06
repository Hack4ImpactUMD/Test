import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequireAuth from './auth/RequireAuth/RequireAuth';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/first">
          <div>Hello</div>
        </Route>
        <Route path="/second">
          <div>Not Hello</div>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
