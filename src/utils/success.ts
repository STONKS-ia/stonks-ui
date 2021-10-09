import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const success = async (message: string) => toast.success(message, {
 theme: "colored",
 position: "bottom-right",
 autoClose: 2000,
 hideProgressBar: false,
 closeOnClick: true,
 pauseOnHover: true,
 draggable: true,
 progress: undefined,
});

export default success;