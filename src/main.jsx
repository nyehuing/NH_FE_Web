import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {IPProvider} from './context.jsx';

createRoot(document.getElementById('root')).render(
    <IPProvider>
        <App />
    </IPProvider>
)
