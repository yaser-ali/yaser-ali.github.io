import './App.css';
import '@vercel/analytics';

//Componets
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Content from './components/Content';

export default function App() {
  return (
    <>

    <Navbar />
    <Content />
    <Footer />

    </>
  );
}
