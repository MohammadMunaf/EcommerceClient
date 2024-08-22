import './App.css';
import Layout from './Layout';
import { SpeedInsights } from '@vercel/speed-insights/next';
function App() {
  return (
    <div className="App">
    <Layout/>
    <SpeedInsights />
    </div>
  );
}

export default App;
