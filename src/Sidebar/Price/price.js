import React from 'react'
import Input from '../../Components/Input'

const price = ({handleChange}) => {
  return (
    <>
      <div className='m1'>
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>       <Input 
          onChange={handleChange}
          value={50}
          title='$0-50'
          name='test2'
       />
       <Input 
          onChange={handleChange}
          value={100}
          title='$50-$100'
          name='test2'
       />
       <Input 
         onChange={handleChange}
         value={150}
         title='$100-$150'
         name='test2'
       />
       <Input 
         onChange={handleChange}
         value={200}
         title='over $150'
         name='test2'
       />

</div>
    </>
    

  )
}
export default price;
