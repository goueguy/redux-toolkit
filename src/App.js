import './App.css';
import { CreatePost } from './components/CreatePost';
import PostList  from './components/PostList';

function App() {
  return (
    <div className="App">
      <PostList/>
      <CreatePost/>
    </div>
  );
}

export default App;
