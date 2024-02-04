
import data from '../resources/products.json'
import './../App.css'
import img1 from './../images/1.png'
import img2 from './../images/2.png'
import img3 from './../images/3.png'
import img4 from './../images/4.png'
import img5 from './../images/5.png'
import img6 from './../images/6.png'
import img7 from './../images/7.png'
import img8 from './../images/8.png'
import img9 from './../images/9.png'
import img10 from './../images/10.png'
import img11 from './../images/11.png'
import img12 from './../images/12.png'
import img13 from './../images/13.png'
import img14 from './../images/14.png'
import img15 from './../images/15.png'
import img16 from './../images/16.png'

export const Content = () => {
  const images = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16]
   return( 
    
       data.map((item)=>{
        console.log(item)
        return(
        <div className='item'>
            <img src={images[item.id - 1]} alt={item.name} />
            <p align='center' className='item-name'>{item.name}</p>
            <p align='center' className='item-price'>{item.price}</p>
            <button className='btn'>Add to cart</button>
            <p  className='item-stk'>{item.stk} Units left</p>
            
        </div>
         )
        
       })
    
   )
}
