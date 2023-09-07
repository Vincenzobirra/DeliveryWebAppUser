import { useEffect, useState } from "react";
import { Global, categories, products } from "../Global";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonPersonal } from "../components/ButtonPersonal";
import { Badge,  } from 'antd'
import { AvatarComponent } from "../components/Avatar";

export function Products () {
  
  const [ refresh, setRefresh ] = useState(true)
  const [ categoriesParent, setCategoriesParent ] = useState([])
  const [ productsParent, setProductsParent ] = useState([])
  const { idParent } = useParams();
  const [ categoryCurrent,  setCategoryCurrent ] = useState(null)
  const navigate = useNavigate();

  useEffect(()=> {
    setProductsParent([])
    setCategoriesParent([])
    getCurrentCategory ()
    generateCategory()
    generateProducts()
  },[ idParent ]);


function getCurrentCategory () {
  categories.map( c => c.id == idParent ? setCategoryCurrent(c): '')
}

function generateCategory( id ) {
  let c = []

  categories.map( ct => {

    //verifica se è una sottocategoria
    if( ct.id_parent_category != idParent ) return;
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
              <div className=" borderRadius border" style={{ fontSize: 15, fontWeight: 'bold', color: 'white', width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', textAlign: 'center', paddingTop: '10%',}}>
                {
                  ct.name
                }
              </div>
      </div>
    )
    setCategoriesParent(c)
  })
}

function generateProducts( id ) {
  let p = []

  products.map( pd => {

    //verifica se è una sottocategoria
    if( pd.categories.indexOf( parseInt(idParent) ) == -1 ) return;
    p.push(
      <div 
        className={ `borderRadius border bgCover`} 
        style={{
          height: '85px', 
          margin:'10px 10px 5px 10px', 
          display: 'flex', 
          alignItems:'start',
          backgroundColor: 'white', 
        }}
        onClick={() => {
          navigate(`/product/${ pd.id }`)
        }}>
          
            
        <div 
          className={ `borderRadius border bgCover`} 
          style={{
            width: '25%',
            background: `url(${pd.image}) no-repeat`, 
            height: '100%', 
            display: 'flex', 
            flexDirection:'column', 
            justifyContent: 'center', 
            alignItems:'center' 
          }}
        >
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', width: '75%', marginLeft:'2%' }}>
          
            <div style={{textAlign: '', paddingTop:'4px', marginBottom:'4px', width:'85%',}}>{ pd.name }</div>
            
            <div 
              className='borderRadius border description' 
              style={{
                display:'flex',
                flexDirection: 'column',
                height:'100%', 
                width:'85%', 
                fontSize:'10px', 
                backgroundColor:'',
                justifyContent: "center",
                textJustify: ''
              }}
            >
              { pd.description}
            </div>
          </div>
          <AvatarComponent 
            backgroundColor={'red'}
            size={'40px'}
            addClass={'addToCart'}
            children={'+'}
          />
       </div>
    )
    setProductsParent(p)
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
            <div className="flexCenter" style={{ fontSize: 18, color: 'white', marginTop: '',}}>
              {
                categoryCurrent ?
                  categoryCurrent.name :
                  ''
              }
          </div>
        <div style={{ display:'block', width:'100%',  height: '70vh', overflowY: 'scroll', marginLeft:'auto', marginRight: 'auto', position:'fixed', bottom:'10%' }}>
            {
              categoriesParent.length > 0 ?
               categoriesParent :
               <></>
            }
            <div style={{display: '', justifyContent:''}}>
              {
                productsParent.length > 0 ?
                productsParent :
                <></>
              }
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