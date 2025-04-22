
import Image from "next/image";
import Link from "next/link";

const products = [
    {
      id: 1,
      name: '#01',
      href: '/tile/01',
      price: '$48',
      imageSrc: 'https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FALCHIMIA%2FALCHIMIA%2520GRAPHITE_preview.jpg&w=3840&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: '#02',
      href: '/tile/02',
      price: '$35',
      imageSrc: 'https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FMARMORICA%2FI03.jpg&w=3840&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: '#03',
      href: '/tile/03',
      price: '$89',
      imageSrc: 'https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FKITCHDECK%2Fkitchdeck-livingroom.jpg&w=3840&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: '#04',
      href: '/tile/04',
      price: '$35',
      imageSrc: 'https://www.simpolo.com/_next/image?url=https%3A%2F%2Fadmin.simpolo.com%2Fuploads%2Fimports%2Ftiles%2Fcollections%2FSPECTRA%2Fspectra-living.jpg&w=3840&q=75&dpl=dpl_4fa76CxzC9sq4VESAppb6P1x5aZs',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function ProductList({ filters }) {
    console.log(filters);
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-2">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-x-3">
            {products.map((product) => (
              <Link key={product.id} href={product.href} className="group">
                <Image
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  width={700}
                  height={450}
                  className="aspect-12/9 w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
                />
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                {/* <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p> */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
  