import { useState } from 'react';
import AddressModal from './AddressModal'; // Modal komponentinizin dosya yolu

const Address = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white shadow-md rounded p-4">
      <div className="flex justify-between items-center">
        <div>
          
          
          <div className="mt-4">
            <button onClick={() => setModalOpen(true)} className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
              Yeni Adres Ekle
            </button>
            <AddressModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Address;

