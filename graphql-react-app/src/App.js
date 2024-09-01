import 'bootstrap/dist/css/bootstrap.min.css';
import AlbumList from './components/album/AlbumList';
import AlbumForm from './components/album/AlbumForm';

function App() {
  return (
    <div style={{ margin: '0 20%' }}>
      <AlbumForm/>
      <AlbumList/>
    </div>
  );
}

export default App;
