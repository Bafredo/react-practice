
import data from '../resources/products.json'
import './../App.css'

export const Content = () => {
   return( 
    
       data.map((item)=>{
        console.log(item)
        return(
        <div className='item'>
            <img src={item.img} alt={item.name} />
            <p className='item-name'>{item.name}</p>
            <p className='item-price'>{item.price}</p>
            <p className='item-stk'>{item.stk} Units left</p>
            <button>Add to cart</button>
        </div>
         )
        
       })
    
   )
}
