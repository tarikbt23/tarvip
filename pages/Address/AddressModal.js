import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { State, City } from 'country-state-city';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const AddressModal = ({ isOpen, onClose, onAddAddress, editAddress }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    state: '',
    city: '',
    postalCode: '',
    address: '',
    addressTitle: '',
    invoiceType: 'Bireysel'
  });
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const modalVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.95 }
  };

  useEffect(() => {
    if (editAddress) {
      setFormData(editAddress);
    }
  }, [editAddress]);

  useEffect(() => {
    setStates(State.getStatesOfCountry('TR'));
  }, []);

  useEffect(() => {
    if (formData.state) {
      setCities(City.getCitiesOfState('TR', formData.state));
    }
  }, [formData.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddAddress(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center overflow-hidden">
      <div className="relative bg-white p-6 rounded-lg max-w-xl h-full md:h-[97vh] w-full overflow-y-auto">
        <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
          <h2 className="text-xl font-medium">Adres {editAddress ? 'Düzenle' : 'Ekle'}</h2>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="Close"
          >
            <IoClose className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mt-2 md:mt-3 lg:mt-4">
            <div>
              <label className="block text-gray-700 text-base font-bold mb-2">Ad*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Adınızı Giriniz"
                className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-base font-bold mb-2">Soyad*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Soyadınızı Giriniz"
                className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 text-base font-bold mb-2">Telefon*</label>
              <PhoneInput
                country={'tr'}
                value={formData.phone}
                onChange={(phone) => setFormData({ ...formData, phone })}
                inputClass="form-input mt-1 block w-full p-2 rounded-md shadow-sm"
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
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="form-select mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm"
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
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="form-select mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm"
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
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm"
                placeholder="Posta Kodunu Giriniz"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 text-base font-bold mb-2">Adres*</label>
              <label className="block text-gray-400 text-md mb-2">Kargonuzun size sorunsuz bir şekilde ulaşabilmesi için mahalle, cadde, sokak, bina gibi detay bilgileri eksiksiz girdiğinizden emin olun.</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="form-textarea mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm"
                rows="3"
                placeholder="Cadde, mahalle sokak ve diğer bilgileri giriniz."
                required
              ></textarea>
            </div>
            <div className="col-span-2">
              <label className="block text-gray-700 text-base font-bold mb-2">Adres Başlığı*</label>
              <input
                type="text"
                name="addressTitle"
                value={formData.addressTitle}
                onChange={handleChange}
                className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm"
                required
              />
            </div>
          </div>
          <div className="mb-4 mt-2 md:mt-3 lg:mt-4">
            <label className="block text-gray-700 text-base font-bold mb-2">Fatura Türü*</label>
            <div className="flex">
              <button
                type="button"
                className={`flex-1 border-2 p-3 rounded-l-lg ${formData.invoiceType === 'Bireysel' ? 'bg-white text-orange-500 border-orange-500' : 'bg-gray-50 border-2 border-gray-300 text-gray-500'}`}
                onClick={() => setFormData({ ...formData, invoiceType: 'Bireysel' })}
              >
                Bireysel
              </button>
              <button
                type="button"
                className={`flex-1 border-2 p-3 rounded-r-lg ${formData.invoiceType === 'Kurumsal' ? 'bg-white text-orange-500 border-orange-500' : 'bg-gray-50 border-2 border-gray-300 text-gray-500'}`}
                onClick={() => setFormData({ ...formData, invoiceType: 'Kurumsal' })}
              >
                Kurumsal
              </button>
            </div>
          </div>
          <AnimatePresence>
            {formData.invoiceType === 'Kurumsal' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="mb-2">
                    <label className="block text-gray-700 text-base font-bold mb-2">VKN*</label>
                    <input
                      type="text"
                      name="vkn"
                      value={formData.vkn}
                      onChange={handleChange}
                      className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm"
                      placeholder="VKN Giriniz"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 text-base font-bold mb-2">Vergi Dairesi*</label>
                    <input
                      type="text"
                      name="taxOffice"
                      value={formData.taxOffice}
                      onChange={handleChange}
                      className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm"
                      placeholder="Vergi Dairesi Giriniz"
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-gray-700 text-base font-bold mb-2">Firma Adı*</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="form-input mt-1 block w-full p-2 rounded-md bg-gray-50 border-2 border-gray-300 shadow-sm"
                      placeholder="Firma Adı Giriniz"
                      required
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div>
            <button type="submit" className="w-full p-2 mt-4 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
