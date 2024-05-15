import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from 'react-icons/io5';
import {State, City } from 'country-state-city';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const AddressModal = ({ isOpen, onClose }) => {
  const [state, setState] = useState(''); // İl için state
  const [city, setCity] = useState(''); // İlçe için state
  const [states, setStates] = useState([]); 
  const [cities, setCities] = useState([]);
  const [invoiceType, setInvoiceType] = useState('Bireysel'); //default: Bireysel
  const [phoneNumber, setPhoneNumber] = useState('');

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.95 }
  };

  const changeInvoiceType = (type) => {
    setInvoiceType(type);
  };

    // Türkiye için illeri yükleme
    useEffect(() => {
      setStates(State.getStatesOfCountry("TR")); // "TR" Türkiye'nin ülke kodu
    }, []);

    // Seçili il değiştiğinde ilçeleri yükleme
    useEffect(() => {
      if (state) {
        setCities(City.getCitiesOfState("TR", state));
      }
    }, [state]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-hidden">
      <div className="relative bg-white p-6 rounded-lg max-w-xl h-full md:h-[97vh] w-full overflow-y-auto">
      <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
          <h2 className="text-xl font-medium">Adres Ekle</h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="Close"
          >
            <IoClose className="h-6 w-6" /> 
          </button>
        </div>
        
        <form>
          <div className="grid grid-cols-2 gap-4  mt-2 md:mt-3 lg:mt-4">
            <div>
              <label className="block text-gray-700 text-base font-bold mb-2">Ad*</label>
              <input type="text" placeholder="Adınızı Giriniz" className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm" required />
            </div>
            <div>
              <label className="block text-gray-700 text-base font-bold mb-2">Soyad*</label>
              <input type="text" placeholder="Soyadınızı Giriniz" className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm" required />
            </div>
            <div>
            <label className="block text-gray-700 text-base font-bold mb-2">Telefon*</label>
            <PhoneInput
              country={'tr'}
              value={phoneNumber}
              onChange={setPhoneNumber}
              inputClass="form-input mt-1 block w-full p-2p-2rounded-md shadow-sm"
              inputStyle={{
                width: '100%', 
                height: '40px' 
              }}
              containerStyle={{
                width: '100%' 
              }}
              dropdownStyle={{
                width: '500%' 
              }}
              required
            />
            </div>
            <div>
            <label className="block text-gray-700 text-base font-bold mb-2">İl*</label>
              <select
                className="form-select mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              >
                <option value="">Seçiniz</option>
                {states.map((il) => (
                  <option key={il.isoCode} value={il.isoCode}>
                    {il.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
            <label className="block text-gray-700 text-base font-bold mb-2">İlçe*</label>
              <select
                className="form-select mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              >
                <option value="">Seçiniz</option>
                {cities.map((ilce) => (
                  <option key={ilce.isoCode} value={ilce.isoCode}>
                    {ilce.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-base font-normal mb-2">Posta Kodu</label>
              <input type="text" className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm" placeholder='Posta Kodunu Giriniz'/>
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 text-base font-bold mb-2">Adres*</label>
              <label className="block text-gray-400 text-md  mb-2">Kargonuzun size sorunsuz bir şekilde ulaşabilmesi için mahalle, cadde, sokak, bina gibi detay bilgileri eksiksiz girdiğinizden emin olun.</label>
              <textarea
                className="form-textarea mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm "
                rows="3"
                placeholder="Cadde, mahalle sokak ve diğer bilgileri giriniz."
                required
              ></textarea>
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 text-base font-bold mb-2">Adres Başlığı*</label>
              <input type="text" className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm" required />
            </div>
          </div>
          <div className="mb-4 mt-2 md:mt-3 lg:mt-4">
            <label className="block text-gray-700 text-base font-bold mb-2">Fatura Türü*</label>
            <div className="flex">
              <button
                type="button"
                className={`flex-1 border-2 p-3 rounded-l-lg ${invoiceType === 'Bireysel' ? 'bg-white text-orange-500 border-orange-500' : 'bg-gray-50 border-2 border-gray-300 text-gray-500'}`}
                onClick={() => changeInvoiceType('Bireysel')}
              >
                Bireysel
              </button>
              <button
                type="button"
                className={`flex-1 border-2 p-3  rounded-r-lg ${invoiceType === 'Kurumsal' ? 'bg-white text-orange-500 border-orange-500' : 'bg-gray-50 border-2 border-gray-300 text-gray-500'}`}
                onClick={() => changeInvoiceType('Kurumsal')}
              >
                Kurumsal
              </button>
            </div>
          </div>
          <AnimatePresence>
          {invoiceType === 'Kurumsal' && (
            <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className='grid grid-cols-2 gap-4'>
              <div className="mb-2">
                <label className="block text-gray-700 text-base font-bold mb-2">VKN*</label>
                <input type="text" placeholder='VKN Giriniz' className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm" required />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-base font-bold mb-2">Vergi Dairesi*</label>
                <input type="text" placeholder='Vergi Dairesi Giriniz' className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm" required />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 text-base font-bold mb-2">Firma Adı*</label>
                <input type="text" placeholder='Firma Adı Giriniz' className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm" required />
              </div>
            </div>
            </motion.div>
          )}
          </AnimatePresence>

          {/* Submit button */}
          <div>
            <button type="submit" className=" w-full p-2 mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md">Kaydet</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
