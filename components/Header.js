import { useState } from 'react';
import Link from 'next/link'
import { SiJordan, SiNike } from "react-icons/si";

const categories = [
  {
    name: 'Yeni Ürünler ve Öne Çıkanlar',
    columns: [
      {
        title: 'Öne Çıkanlar',
        items: ['Tüm Yeni Sezon Ürünlerini İncele', 'En Çok Satan Ürünler', 'Member Shop', 'SNKRS Lansman Takvimi']
      },
      {
        title: 'İkonik Modelleri İncele',
        items: ['Air Force 1', 'Air Jordan 1', 'Air Max', 'Dunk', 'Blazer', 'Pegasus', 'Mercurial']
      },
      {
        title: 'Sporu Keşfet',
        items: ['Futbol', 'Koşu', 'Basketbol', 'Fitness', 'Golf', 'Tenis', 'Yoga', 'Dans', 'Kaykay']
      },
      {
        title: 'Trend Ürünler',
        items: ['Air Max Ana Sayfası', , 'Nike Style By', 'Jordan Retro Koleksiyonu', 'Genç Stilleri', 'EasyOn', 'Sürdürülebilirlik']
      }
    ]
  },
  {
    name: 'Erkek',
    columns: [
      {
        title: 'Öne Çıkanlar',
        items: ['Yeni Çıkanlar', 'En Çok Satan Ürünler', 'Member Shop', 'SNKRS Lansman Takvimi']
      },
      {
        title: 'Ayakkabılar',
        items: ['Air Force 1', 'Air Jordan 1', 'Air Max', 'Dunk', 'Blazer', 'Pegasus', 'Mercurial']
      },
      {
        title: 'Giysiler',
        items: ['Tüm Giyim', 'Üstler ve Tişörtler', 'Şortlar', 'Eşofmanlar', 'Ceketler']
      },
      {
        title: 'Sporu Keşfet',
        items: ['Koşu', 'Futbol', 'Basketbol', 'Antreman ve Spor Salonu', 'Golf', 'Tenis',]
      },
      {
        title: 'Aksesuar ve Ekipmanlar',
        items: ['Tüm Aksesuar ve Ekipmanlar', 'Çantalar ve Sırt Çantaları', 'Çoraplar']
      }
    ]
  },
  {
    name: 'Kadın',
    columns: [
      {
        title: 'Öne Çıkanlar',
        items: ['Yeni Çıkanlar', 'En Çok Satan Ürünler', 'Member Shop', 'SNKRS Lansman Takvimi']
      },
      {
        title: 'Ayakkabılar',
        items: ['Air Force 1', 'Air Jordan 1', 'Air Max', 'Dunk', 'Blazer', 'Pegasus', 'Mercurial']
      },
      {
        title: 'Giysiler',
        items: ['Tüm Giyim', 'Üstler ve Tişörtler', 'Şortlar', 'Eşofmanlar', 'Ceketler']
      },
      {
        title: 'Sporu Keşfet',
        items: ['Fitness','Futbol', 'Koşu', 'Basketbol', 'Golf', 'Tenis', 'Yoga', 'Dans', 'Kaykay']
      },
      {
        title: 'Aksesuar ve Ekipmanlar',
        items: ['Tüm Aksesuar ve Ekipmanlar', 'Çantalar ve Sırt Çantaları', 'Çoraplar']
      }
    ]
  },
  {
    name: 'Çocuk',
    columns: [
      {
        title: 'Öne Çıkanlar',
        items: ['Yeni Çıkanlar', 'En Çok Satan Ürünler', 'Member Shop', 'SNKRS Lansman Takvimi']
      },
      {
        title: 'Ayakkabılar',
        items: ['Air Force 1', 'Air Jordan 1', 'Air Max', 'Dunk', 'Blazer', 'Pegasus', 'Mercurial']
      },
      {
        title: 'Giysiler',
        items: ['Tüm Giyim', 'Üstler ve Tişörtler', 'Şortlar', 'Eşofmanlar', 'Ceketler']
      },
      {
        title: 'Yaşa Göre Çocuk',
        items: ['Genç Çocuk', 'Küçük Çocuk', 'Bebek']
      },
      {
        title: 'Aksesuar ve Ekipmanlar',
        items: ['Tüm Aksesuar ve Ekipmanlar', 'Çantalar ve Sırt Çantaları', 'Çoraplar']
      },
    ]
  }
];

const Header = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };
  
    const getGridTemplateColumns = (columns) => {
    return `repeat(${columns.length}, minmax(200px, 1fr))`;
  };

  return (
    <header>
      {/* Jordan Section */}
      <div className='bg-gray-100 flex items-center justify-between py-2 space-x-8 md:space-x-12 lg:space-x-16'>
        {/* Logo */}
        <div className='px-16'>
          <SiJordan className='text-2xl' />
        </div>

        {/* Navigation */}
        <nav className='hidden md:flex justify-between'>
          {/* Menu */}
          <div className='flex items-center space-x-4 md:space-x-6 lg:space-x-8 whitespace-nowrap group text-xl px-16'>
            <Link href='/' className='font-normal'>Mağaza Bul</Link>
            <Link href='' className='font-normal'>Yardım</Link>
            <Link href='' className='font-normal'>Bize Katıl</Link>
            <Link href='' className='font-normal'>Oturum Aç</Link>
          </div>
        </nav>
      </div>

      {/* Nike Section */}
      <div className='py-1 md:py-3 lg:py-5 text-black'>
        <div className='bg-white flex items-center justify-between space-x-8 md:space-x-12 lg:space-x-16'>
          {/* Logo */}
          <div className='px-16'>
            <SiNike className='text-7xl' />
          </div>

          {/* Mobile Menu */}
          <div className='block md:hidden pr-4'>
            <div className='space-y-1 cursor-pointer'>
              <div className='bg-black w-8 h-1 rounded-full'></div>
              <div className='bg-black w-8 h-1 rounded-full'></div>
              <div className='bg-black w-8 h-1 rounded-full'></div>
            </div>
          </div>

          {/* Navigation */}
          <nav className='hidden md:flex justify-between'>
            {/* Menu */}
            <div className='flex items-center space-x-4 md:space-x-6 lg:space-x-8 whitespace-nowrap text-xl'>
              {/* Yeni Ürünler ve Öne Çıkanlar Dropdown */}
              <ul className="flex w-full justify-between">
                {categories.map(category => (
                  <li key={category.name} onMouseEnter={() => handleMouseEnter(category.name)} onMouseLeave={handleMouseLeave} className="w-full">
                    <Link href="#" className="py-4 px-6 inline-block hover:text-gray-500 w-full text-center">{category.name}</Link>
                    {activeCategory === category.name && (
                    <div className="absolute bg-white shadow-md border-t-2 border-black mt-1 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 w-full left-0 right-0"
                    style={{ display: 'grid', gridTemplateColumns: getGridTemplateColumns(category.columns), gap: '4px', padding: '4px' }}>
                      {category.columns.map((column, index) => (
                        <div key={index} className="flex flex-col">
                          <span className="font-bold mb-2">{column.title}</span>
                          {column.items.map(item => (
                            <Link key={item} href="#" className="py-1 hover:text-gray-500">{item}</Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          {/* Search and icons */}
          <div className="flex items-center space-x-4 px-8">
            <input type="text" placeholder="Ara" className="bg-slate-50 hover:bg-slate-200 border rounded-lg py-2 px-4" />
            <button>🔍</button>
            <button>❤️</button>
            <button>🛒</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
