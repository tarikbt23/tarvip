import React from 'react';

const steps = [
  {
    id: 1,
    title: 'Bir CAD Dosyası Yükle',
    description: 'Tek bir teklif oluşturmak için farklı parçalara yönelik birden fazla tasarımı aynı anda içe aktarılabilir. Bir dakikadan kısa bir sürede ekranda ayrıntılı bir maliyet tahmini belirir.',
    image: '/images/1.png', 
  },
  {
    id: 2,
    title: 'Süreci Belirle',
    description: 'Öncelikle ihtiyacınız olan üretim teknolojisini seçin. Onlarca metal ve plastik malzeme, gelişmiş kaplamalar ve sertifikalarla üretime başlayın.',
    image: '/images/2.png', 
  },
  {
    id: 3,
    title: 'Parçalarınızı Sipariş Edin',
    description: 'Gerekli seçenekleri seçtikten sonra tek yapmanız gereken siparişi onaylamak ve güvenli ödeme platformunda ödeme yapmaktır. Tasarımınız mühendisler tarafından analiz edilecektir.',
    image: '/images/3.jpg', 
  },
  {
    id: 4,
    title: 'Parçalar Gönderildi!',
    description: 'Kısa süre içerisinde sipariş ettiğiniz parçalar doğrudan teslimat adresinize teslim edilecektir. Paketinizi istediğiniz zaman kişisel hesabınızdan takip edebilirsiniz.',
    image: '/images/4.png' 
  },
];

const adjustedDescriptions = steps.map(step => {
  let adjustedDescription = step.description;
  while (adjustedDescription.split('\n').length < 5) {
    adjustedDescription += '\n';
  }
  return { ...step, description: adjustedDescription };
});

const ProcessSteps = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center p-6 bg-white">
      <h2 className="text-3xl font-bold mb-8 text-blue-950">Süreç Nasıl İşliyor?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
        {adjustedDescriptions.map((step) => (
          <div key={step.id} className=" md:flex flex-col items-center text-center p-2 md:p-4 bg-white">
            <div className="flex items-center md:mb-4">
              <span className="text-3xl font-bold text-blue-900 mr-2">{step.id}</span>
              <img src={step.image} alt={`Step ${step.id}`} className="hidden md:block w-16 h-16" />
            </div>
            <h4 className="text-lg font-bold mb-2 text-blue-950">{step.title}</h4>
            <p className="text-sm font-semibold text-blue-900 whitespace-pre-line">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;
