import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const error = async (message: string) => toast.error(message, {
 theme: "colored",
 position: "bottom-right",
 autoClose: 5000,
 hideProgressBar: false,
 closeOnClick: true,
 pauseOnHover: true,
 draggable: true,
 progress: undefined,
});

export default error;