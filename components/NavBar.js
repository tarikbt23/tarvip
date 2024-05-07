import { useState } from 'react';
import Link from 'next/link';

const categories = [
  {
    name: 'Shoes',
    items: ['Lifestyle', 'Classics', 'Training + Gym', 'Running', 'Performance Basketball', 'Heritage Basketball', 'Slides + Sandals']
  },
  {
    name: 'Clothing',
    items: ['Sweatshirts + Hoodies', 'T-Shirts + Tops', 'Leggings', 'Bras', 'Dresses + Skirts', 'Tracksuits', 'Jackets', 'Shorts', 'Pants', 'Essentials']
  },
  {
    name: 'Accessories',
    items: ['Bags + Backpacks', 'Socks', 'Hats', 'Sunglasses', 'Watches', 'Sports Equipment']
  },
  {
    name: 'Sports',
    items: ['Studio', 'Basketball', 'Training + Gym', 'Running', 'Motorsport', 'Golf']
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (category) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="relative bg-gray-800 text-white w-full">
      <div className="flex justify-between mx-auto">
        <ul className="flex w-full justify-between">
          {categories.map(category => (
            <li key={category.name} onMouseEnter={() => handleMouseEnter(category.name)} onMouseLeave={handleMouseLeave} className="w-full">
              <Link href="#" className="py-4 px-6 inline-block hover:text-gray-300 w-full text-center">{category.name}</Link>
              {activeCategory === category.name && (
                <div className=" absolute bg-gray-700 border-t border-gray-600 w-full left-0 right-0">
                  <ul className="py-2">
                    {category.items.map(item => (
                      <li key={item}>
                        <Link href="#"className="py-2 px-4 block hover:bg-gray-600">{item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
