import ReactDOM from 'react-dom/client';
import Modal from "./Modal"

const createModal = (content) => ReactDOM.createRoot(document.getElementById("modal-container")).render(<Modal content={content} />)


export default createModal