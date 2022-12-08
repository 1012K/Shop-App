import React, { useState, useEffect } from 'react'
import { View } from './view';
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
 
 

// getting the values of local storage

const getDatafromLS = () => {
  const data = localStorage.getItem('shops');
  if (data) {
    return JSON.parse(data);
  }
  else {
    return []
  }
}

export const App = () => {

  // main array of objects state || shops state || shops array of objects
  const [shops, setshops] = useState(getDatafromLS());

  // input field states
  const [shopName, setShopName] = useState('');
  const [shopArea, setShopArea] = useState('');
  const [shopCategory, setShopCategory] = useState('');
  const [shopOpenDate, setShopOpenDate] = useState('');
  const [shopCloseDate, setShopCloseDate] = useState('');
  

  // form submit event
  const handleAddShopSubmit = (e) => {
    e.preventDefault();


    // creating an object
    let shop = {
      shopName,
      shopArea,
      shopCategory,
      shopOpenDate,
      shopCloseDate,
      
    }

    setshops([...shops, shop]);
    setShopName('');
    setShopArea('');
    setShopCategory('');
    shopOpenDate('');
    shopCloseDate('');
    

  }

  //disable dates  
  {/*const disableDates=()=>
  {
    var today,dd,mm,yyyy;
    today=new Date();
    dd=today.getDate()+1;
    mm=today.getMonth();
    yyyy=today.getFullYear();
    return dd+" /"+mm+"/"+yyyy;
  } */}

  // delete shop 
  const deleteShop = (shopCategory) => {
    const filteredShops = shops.filter((element, index) => {
      return element.shopCategory !== shopCategory
    })
    setshops(filteredShops);
  }

   

  // saving data to local storage
  useEffect(() => {
    localStorage.setItem('shops', JSON.stringify(shops));
  }, [shops])

  return (
    <div className='wrapper'>
      <h1>Shop App</h1>
      <p>Add and view your shops using local storage</p>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
            onSubmit={handleAddShopSubmit}>

            <label>Shop Name</label>
            <input pattern="[A-Za-z]+" type="text" className='form-control' required 
              onChange={(e) => setShopName(e.target.value)} value={shopName}></input>
            <br></br>




            { /* <label>Shop Area</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setShopArea(e.target.value)} value={shopArea}></input>
            <br></br>
            */}


             <label>Shop Area</label>
            <select value={shopArea} className='form-control' required
            onChange={(e)=>setShopArea(e.target.value)} > 
              <option>Thane</option>
              <option>Pune</option>
              <option>Nasik</option>
              <option>Nagpur</option>
              <option>Ahemednagar</option>
              <option>Sholapur</option>
              <option>Mumbai Suburbun</option> 
            </select>
            <br></br>
            



            <label>Shop Category</label>
            <select value="shopCategory" placeholder="shop category " className='form-control' required
              onChange={(e) => setShopCategory(e.target.value)}  >
                <option>Grocery</option>
                <option>Baker</option>
                <option>Chemist</option>
                <option>stationery shop</option>
                 
              </select>
            <br></br>

            <label>Shop Open Date</label>
            <input type="date"  className='form-control' required
              onChange={(e) => setShopOpenDate(e.target.value)} value={shopOpenDate}   ></input>
            <br></br>


            <label>Shop Close Date</label>
            <input type="date" className='form-control' required
              onChange={(e) => setShopCloseDate(e.target.value)} value={shopCloseDate}></input>
            <br></br>

            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {shops.length > 0 && <>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Shop Category#</th>
                    <th>Shop Name</th>
                    <th>Shop Area</th>
                    <th>Shop Open Date</th>
                    <th>Shop Close Date</th>
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  <View shops={shops} deleteShop={deleteShop} />
                   
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
              onClick={() => setshops([])}>Remove All</button>
          </>}
          {shops.length < 1 && <div>No shops are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App