import GridWrapper from '@/components/GridWrapper';
import Heading from '@/components/Heading';
import RevealButtonWithIcon from '@/components/RevealButtonWithIcon';
import { SearchIcon } from 'lucide-react';
import SectionEight from '@/components/SectionEight';
import { useState, useEffect } from 'react';
import { getSearchResults } from '@/services';
import { Link } from 'react-router-dom';
import { Product } from '@/categories';

const SearchResults = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const results = getSearchResults(10); // this can accept the query if needed
    setProducts(results);
  }, [isSearch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevents page reload
    setIsSearch((prev) => !prev); // toggles to trigger effect
  };

  return (
    <div className='z-10 bg-white relative'>
      <div className='flex pt-[120px] pb-[36px] min-[480px]:pb-[48px] min-[768px]:pt-[140px] min-[768px]:pb-[60px] min-[992px]:pt-[100px] min-[992px]:pb-[80px] bg-[#f4f8fa] text-[#07090c]'>
        <GridWrapper>
          <div className='grid row-[1/2] self-end col-[2/3] mx-auto max-w-[525px] justify-items-center justify-center grid-cols-[1fr] grid-rows-[auto] text-center gap-y-[36px] gap-x-[40px]'>
            <Heading text='search results' type='large' />
            <form
              action='/search'
              className='border border-[#e4e9ec] rounded-[100px] p-[4px] flex bg-white'
              onSubmit={handleSubmit}
            >
              <input
                className='min-w-[65vw] min-[768px]:min-w-[350px]  min-h-[50px] pl-[24px] text-[16px] text-[#333] w-full h-[38px] align-middle bg-[rgba(255,255,255,0)] leading-1.5 p-[8px_12px] tracking-normal outline-none'
                maxLength={256}
                name='query'
                placeholder='Enter search...'
                type='search'
                id='search'
                required
                value={query}
                onChange={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setQuery(e.target.value);
                }}
              />
              <button
                className='bg-[#07090c] flex  justify-center items-center item tracking-[4px] uppercase bg-[50%] bg-no-repeat rounded-[100px] w-[50px] min-w-[50px] text-[11px] bg-size-[16px]  p-[9px_15px] cursor-pointer'
                value=''
              >
                <SearchIcon color='white' />
              </button>
            </form>
          </div>
        </GridWrapper>
      </div>
      <section className='pb-[80px] min-[768px]:pb-[100px] min-[992px]:pb-[160px] z-10 justify-center flex relative'>
        <GridWrapper>
          <div className='row-[1/2] col-[2/3] grid gap-x-[80px] gap-y-[16px] grid-rows-[auto] grid-cols-[1fr]'>
            <div className='grid pt-0 min-[768px]:pt-[24px] gap-x-[16px] gap-y-[40px] grid-rows-[auto] grid-cols-[1fr]'>
              <div>
                <div className='grid grid-cols-[1fr] min-[992px]:grid-cols-[1fr_1fr] grid-rows-[auto_auto] gap-x-[80px]'>
                  {products.map((product, id) => (
                    <div
                      key={id}
                      className='grid grid-cols-[1fr] gap-x-[36px] gap-y-[24px] min-[768px]:gap-y-[16px] py-[36px] min-[768px]:grid-cols-[.8fr_1fr] border-b border-[#e4e9ec] p-[60px_0] transition-[background-color_.4s_cubic-bezier(.25,.46,.45,.94)] '
                    >
                      <div
                        style={{
                          backgroundImage: `url(${product.images[2]})`,
                        }}
                        className='min-h-[65vw] min-[768px]:min-h-[35vw] min-[992px]:min-h-[22vw] bg-[50%] bg-no-repeat bg-cover'
                      ></div>
                      <div className='grid gap-y-[12px] min-[768px]:gap-y-[40px] col-[16px] grid-rows-[auto_auto] grid-cols-[1fr] content-between'>
                        <div className='text-[#07090c] text-[28px] font-[500] leading-[1.4em] tracking-normal'>
                          {product.name}
                        </div>
                        <div className='grid gap-y-[18px] gap-x-[16px] grid-rows-[auto] grid-cols-[1fr] justify-items-start'>
                          <p className='text-[15px] leading-[1.65em] text-[#667479] tracking-normal'>
                            <span>{product.shortDescription}</span>
                          </p>
                          <Link to={`/products/${product.id}`}>
                            <RevealButtonWithIcon
                              text='view now'
                              textColor='#667479'
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GridWrapper>
      </section>
      <SectionEight />
    </div>
  );
};

export default SearchResults;
