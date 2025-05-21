import { X } from 'lucide-react';


const Modal = ({ children, onClose }) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          <X size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
