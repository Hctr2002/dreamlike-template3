import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PresentationPage from './pages/PresentationPage';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { Layout } from './components/Layout';

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <Router>
            <Layout />
            <Routes>
              <Route path="/presentation" element={<PresentationPage />} />
            </Routes>
          </Router>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
