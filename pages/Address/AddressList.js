import React from 'react';

const AddressList = ({ addressList, onEditAddress, onDeleteAddress }) => {
  return (
    <>
      {addressList.map((address, index) => (
        <div key={index} className="w-80 md:w-full p-4 border-2 border-orange-500 rounded-3xl bg-white relative">
            <div className="absolute top-0 right-2 flex space-x-2">
            <button
              className=" text-gray-500 hover:text-gray-700 p-1 rounded underline"
              onClick={() => onEditAddress(index)}
            >
              Düzenle
            </button>
            <button
              className=" text-red-400 hover:text-red-600 p-1 rounded underline"
              onClick={() => onDeleteAddress(index)}
            >
              Sil
            </button>
          </div>
          <div className="flex items-center mb-1 mt-4">
            <h3 className="font-bold text-base md:text-lg truncate">{address.addressTitle}</h3>
          </div>
          <div className="flex-1">
          <p className='truncate font-semibold '> {address.firstName} {address.lastName}</p>
            <p className="truncate">{address.address}</p>
            <p className="text-gray-700 truncate">{address.city}/{address.state}</p>
          </div>
          <div className=" ">
            <span>{address.phone}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default AddressList;
