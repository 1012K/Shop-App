import React from 'react'
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'
import {edit} from 'react-icons-kit/feather/edit'


export const View = ({shops,deleteShop,editShop}) => {
    
    return shops.map(shop=>(
        
        <tr key={shop.shopCategory}>
            <td>{shop.shopCategory}</td>
            <td>{shop.shopName}</td>
            <td>{shop.shopArea}</td>
            <td>{shop.shopOpenDate}</td>
            <td>{shop.shopCloseDate}</td>
            
            <td className='delete-btn' onClick={()=>deleteShop(shop.shopCategory)}>
                <Icon icon={trash}/>
            </td>   
            <td className='edit-btn' onClick={()=>editShop(shop.shopCategory)}>
                <Icon icon={edit}/>
            </td>         
        </tr>            
    
))
}