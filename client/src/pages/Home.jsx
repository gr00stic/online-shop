import Card from '../components/Card';

function Home({ searchValue, setSearchValue, items, onAddToCart }) {
    return (
        <div className='content p-40'>
            <div className="d-flex align-center mb-40 justify-between">
                <h1>{searchValue ? `Searching for: ${searchValue}` : 'Products'}</h1>
                <div className="search-block d-flex">
                    <img src="img/search.svg" alt="Search" />
                    <input onChange={(event) => setSearchValue(event.target.value)} value={searchValue} placeholder="Search" />
                    {searchValue && <img onClick={() => setSearchValue('')} className='cu-p' src="img/btn-remove.svg" alt="clearSearch" />}
                </div>
            </div>
            <div className='d-flex flex-wrap'>
                {
                    items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                        <Card
                            key={item._id}
                            _id={item._id}
                            name={item.name}
                            price={item.price}
                            imageUrl='img/logo.png'
                            onPlus={(obj) => onAddToCart(obj)}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;