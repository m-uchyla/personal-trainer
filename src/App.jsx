import styles from './style';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

function App() {

  return (
      <section className='w-full bg-dark relative overflow-hidden'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </section>
  )
}

export default App
