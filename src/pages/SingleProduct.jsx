import React from 'react'
import PRODUCTS from '../data';
import{Link,useNavigate,useParams,useLocation} from 'react-router-dom'
function SingleProduct() {
  const navigate=useNavigate();
  const {productId}=useParams();
  const{pathname}=useLocation();
  // get products
  const singleProduct=PRODUCTS.find(product=>product.id===parseInt(productId))
  const{id,name,price,image,details}=singleProduct;

  return (
<main>
  <div className='pg-header'>
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-lg-7'>
        <h1>{name}</h1>
        <p>{pathname}</p>
        </div>
        <div className='col-lg-5'>
          <nav aria-label='breacrumb'>
          <ol className='breadcrumb justify-content-end'>
            <li className='breadcrumb-item'><Link to='/'>Home</Link></li>
            <li className='breadcrumb-item'><Link to='/products'>products</Link></li>
            <li className='breadcrumb-item active' aria-current='page'>{name}</li>
          </ol>

          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* contents */}
  <div className='container content'>
  <div className='row'>
    <div className='col-lg-5'>
 <img  src={image} alt='' className='img-fluid'/>
    </div>
    <div className='col-lg-7'>
      <h2>{name}</h2>
      <p className='price'><strong>{price}</strong></p>
      <p>{details}{details}{details}{details}</p>
      <br/>
      <button className='btn btn-primary btn-sm' onClick={()=>navigate(-1)}>Back</button>&nbsp;
      <button className='btn btn-primary btn-sm' onClick={()=>navigate('/products')}>NAVIGATE TO PRODUCTS</button>&nbsp;
      <Link to='/products' className='btn btn-primary btn-sm'>Products</Link>
    </div>
  </div>

  </div>
</main>
  )
}

export default SingleProduct