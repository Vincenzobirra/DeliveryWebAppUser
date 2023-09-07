import { useEffect, useState } from "react";
import { Global, calendar, categories, products } from "../Global";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonPersonal } from "../components/ButtonPersonal";
import { Badge, Avatar } from 'antd'
import { uuid as uuidv4 } from 'uuid';

export function Product () {
  
  const [ refresh, setRefresh ] = useState(true)
  const [ product, setProduct ] = useState(null)
  const { idProduct } = useParams()
  const navigate = useNavigate();


  useEffect(()=> {
    getProduct()
  },[ idProduct ]);

  function getProduct() {
    products.map( p => p.id == idProduct ? setProduct( p ): '')

  }

  return (
        <div className="borderRadius" style={{ width: '100vw', height: '100%', display:'flex', flexDirection:'column', marginTop: '10vh',}} >
          
          <div style={{ backgroundColor: 'rgb(230,135,0)' , width: '100%', height: '10%', position: 'fixed', top:'0', display: 'flex', justifyContent:'space-between', padding: '10px'}}>
            
            <div style={{ display: 'flex'}}> 
              <div style={{  display:'flex', flexDirection:'column' , justifyContent:'center'}}>
                <img src={ [ Global.typeShop == 'Ritiro' ? Global.iconTakeAway : Global.iconDelivery ] } alt="icon delivery"  style={{ height:'60%', filter: 'brightness(0) invert(1)'}}/>  
              </div>
              <div style={{  display:'flex', flexDirection:'column' , justifyContent:'center', marginLeft: ''}}>
                <div style={{ color: 'white', fontSize:'15px', padding: '10px' }}>{ Global.typeShop } </div>
              </div>
            </div>

            <div style={{ display: 'flex'}}>
              <div style={{  display:'flex', flexDirection:'column' , justifyContent:'center'}}>
                  <img src={ Global.iconCalendar } alt="icon delivery"  style={{ height:'50%', filter: 'brightness(0) invert(1)'}}/>  
              </div>
              <div style={{  display:'flex', flexDirection:'column' , justifyContent:'center', marginLeft: ''}}>
                 <div style={{ color: 'white', fontSize:'13px', padding: '10px' }}>{  Global.dateOrder +' '+ Global.month +' '+ Global.hoursOrder } </div>
              </div>
            </div>
            
          </div>
            <div className="flexCenter" style={{ fontSize: 20, fontWeight: '', color: 'white', marginTop: '10px', height: '4%'}}>
              NOME PRODOTTO
          </div>
        <div style={{ backgroundColor:'', display:'', position:'fixed', width:'100%',  height: '90vh', }}>
            
            <div 
              className=" border bgCoverProduct "
              style={{ 
                background: `url(${ product ? product.image : ''}) no-repeat`,  
                height: '100%', 
                width: '100%', 
                margin: 'auto', 
                display:'flex', 
                flexDirection: 'column', 
                justifyContent: 'end'
              }
            }>
              <div className=" borderRadiusTop border " style={{ height: '70%', width: '100%', backgroundColor: 'white'}}>

              </div>
            </div>


        </div>

          <div style={{ backgroundColor: 'rgb(230,135,0)' , width: '100%', height: '10%', position: 'fixed', bottom:'0', display: 'flex',  justifyContent:'space-around', padding: '15px'}}>
          <div style={{  display:'flex', flexDirection:'column' , justifyContent:'center'}}>
                <img 
                  src={ Global.arrowBack } alt="icon delivery"  style={{ height:'95%', filter: 'brightness(0) invert(1)'}}
                  onClick={() => { navigate( -1, {replace: true})}}
                />  
              </div>
            
            <div style={{width: '70%'}}>
              <ButtonPersonal
                addStyle={{ height: '100%'}}
                nameButton={`Aggiungi al carrello - ${ product ? product.amount_gross : ''} €`}
              />
            </div>
            
            <Badge color="lime" count={ Global.cart.numberProduct } showZero={true} offset={[ -5, 3, ]}>
              <div style={{  
                height: '100%', 
                paddingRight: '5px', 
                }}>
                  <img src={ Global.iconCart } alt="logoCart"  style={{ height:'100%', filter: 'brightness(0) invert(1)'}}/>  
              </div>
            </Badge>
          </div>   

        </div>
    )
}