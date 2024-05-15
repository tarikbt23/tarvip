import React, { useState } from 'react';
import AddressModal from './AddressModal';
import AddressList from './AddressList';
import { IoIosAddCircleOutline } from "react-icons/io";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editAddress, setEditAddress] = useState(null);
  const [addressList, setAddressList] = useState([]);

  const handleAddAddress = (newAddress) => {
    if (editAddress !== null) {
      const updatedAddressList = addressList.map((address, index) =>
        index === editAddress ? newAddress : address
      );
      setAddressList(updatedAddressList);
      setEditAddress(null);
    } else {
      setAddressList([...addressList, newAddress]);
    }
  };

  const handleEditAddress = (index) => {
    setEditAddress(index);
    setIsModalOpen(true);
  };

  const handleDeleteAddress = (index) => {
    const updatedAddressList = addressList.filter((_, i) => i !== index);
    setAddressList(updatedAddressList);
  };

  return (
    <div className="container mx-auto p-4 px-5 lg:px-64">
      <div className="space-y-4">
        <div className=" border p-4 rounded-lg items-center">
          <h2 className="text-xl font-bold mb-4">Teslimat Adresi</h2>
          {addressList.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64">
              <button
                className="flex flex-col items-center justify-center border p-4 rounded-3xl hover:bg-slate-50 hover:border-orange-500"
                onClick={() => setIsModalOpen(true)}
              >
                <IoIosAddCircleOutline className="text-orange-500 text-2xl lg:text-3xl" />
                <span className="mt-2">Yeni Adres Ekle</span>
              </button>
            </div>
          ) : (
            <div className="flex flex-col md:grid grid-cols-2 gap-4">
              <button
                className="flex flex-col items-center justify-center border p-4 rounded-3xl hover:bg-slate-50 hover:border-orange-500"
                onClick={() => setIsModalOpen(true)}
              >
                <IoIosAddCircleOutline className="text-orange-500 text-2xl lg:text-3xl" />
                <span className="mt-2">Yeni Adres Ekle</span>
              </button>
              <AddressList
                addressList={addressList}
                onEditAddress={handleEditAddress}
                onDeleteAddress={handleDeleteAddress}
              />
            </div>
          )}
        </div>
      </div>
      {isModalOpen && (
        <AddressModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddAddress={handleAddAddress}
          editAddress={editAddress !== null ? addressList[editAddress] : null}
        />
      )}
    </div>
  );
};

export default Home;
