import { useEffect, useState } from "react";
import { Global, calendar, categories } from "../Global";
import { useNavigate } from "react-router-dom";
import { ButtonPersonal } from "../components/ButtonPersonal";
import { Badge, Avatar } from 'antd'

export function Menu () {
  const [ refresh, setRefresh ] = useState(true)
  const [ categoriesParent, setCategoriesParent ] = useState([])
  const navigate = useNavigate();


  useEffect(()=> {
    generateCategory()
  },[ ])

function generateCategory() {
  let c = []

  categories.map( ct => {

    //verifica se è una sottocategoria
    if(ct.id_parent_category != null) return;
    c.push(
      <div 
            className={ `borderRadius border bgCover`} 
            style={{
              background: `url(${ct.image}) no-repeat`, 
              height: '85px', 
              margin:'10px', 
              display: 'flex', 
              flexDirection:'column', 
              justifyContent: 'center', 
              alignItems:'center' 
            }}
            onClick={() => {
              navigate(`/products/${ ct.id }`)
            }}
          >
              <div className=" borderRadius border" style={{ fontSize: 15, fontWeight: 'bold', color: 'white', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)', textAlign: 'center', paddingTop: '10%',}}>
                {
                  ct.name
                }
              </div>
      </div>
    )
    setCategoriesParent(c)
  })
}

    return (
        <div className="borderRadius" style={{ width: '100vw', height: '76%', display:'flex', flexDirection:'column', marginTop: '10vh',}} >
          
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
              Seleziona una categoria
          </div>
        <div style={{ display:'block', width:'100%',  height: '68vh', overflowY: 'scroll', marginLeft:'auto', marginRight: 'auto', position:'fixed', bottom:'10%' }}>
            {
              categoriesParent.length > 0 ?
               categoriesParent :
               <></>
            }
        </div>

          <div style={{ backgroundColor: 'rgb(230,135,0)' , width: '100%', height: '10%', position: 'fixed', bottom:'0', display: 'flex',  justifyContent:'space-around', padding: '15px'}}>
          <div style={{  display:'flex', flexDirection:'column' , justifyContent:'center'}}>
                <img 
                  src={ Global.arrowBack } alt="icon delivery"  style={{ height:'95%', filter: 'brightness(0) invert(1)'}}
                  onClick={() => { navigate( '/deliveryOrCollection', { replace: true })}}
                />  
              </div>
            
            <div style={{width: '70%'}}>
              <ButtonPersonal
                addStyle={{ height: '100%'}}
                nameButton={'Controlla ordine'}
              />
            </div>
            
            <Badge color="lime" count={ Global.cart.numberProduct } showZero={true} offset={[ -5, 3, ]}>
              <div style={{  height: '100%', paddingRight: '5px',backgroundColor:'' }}>
                  <img src={ Global.iconCart } alt="logoCart"  style={{ height:'100%', filter: 'brightness(0) invert(1)'}}/>  
              </div>
            </Badge>
          </div>   

        </div>
    )
}