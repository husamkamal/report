import './App.css';
import Dashboard from './components/Dashboard';
import LeftSideBar from './components/LeftSideBar';
import Sidebar from './components/Sidebar';
import Content from './components/content';

function App() {
  return (
    <div className="container">
      <Sidebar />
      {/* <Content title='انقلاب' endpoint="انقلاب" /> */}
      <Dashboard />
      <LeftSideBar />
    </div>
  );
}

export default App;
