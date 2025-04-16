import Header from './components/Header'; // 引入 Header
import Footer from './components/Footer'; // 引入 Footer
import './App.css';

function App() {
  return (
    <div className="app-container"> {/* 可以加個外層容器方便佈局 */}
      <Header />
      <main>
        {/* 頁面主要內容區域 */}
        <h1>Arnold's Personal Website (Coming Soon!)</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;