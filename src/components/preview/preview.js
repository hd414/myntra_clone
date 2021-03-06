import React from 'react';
import CollectionItem from '../collection_item/collection_item';
import './preview.scss';


const Preview = ({title,items}) =>{
    return(
    <div className="collection-preview">
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className="preview">
             {
               items.filter((item,ind)=>{ return (ind<4) }).map((item)=>{
                
                return(
                    <CollectionItem key={item.id} item = {item}/>
                )
                   
               })
             }
        </div>
    </div>
    );
}


export default Preview;