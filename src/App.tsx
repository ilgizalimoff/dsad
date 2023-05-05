import styles from './app.module.sass'
import AppRouther from './components/AppRouther';

function App() {
  return (
    <div className={styles.app}>
      <AppRouther />
    </div>
  );
}

export default App;
