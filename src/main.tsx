import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Lista from './Lista.tsx'
import Formularios from './Formularios.tsx'
import FormulariosControlados from './FormulariosControlados.tsx'

createRoot(document.getElementById('root')!).render(
  <FormulariosControlados />
)
