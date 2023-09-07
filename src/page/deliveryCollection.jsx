import { useEffect, useState } from "react";
import { Global, calendar } from "../Global";
import { useNavigate } from "react-router-dom";
import { ButtonPersonal } from "../components/ButtonPersonal";

export function DeliverCollection () {
  const [ refresh, setRefresh ] = useState(true)
  const [ days, setDays ] = useState([])
  const [ slotsTime, setSlotsTime ] = useState([])
  const navigate = useNavigate();
  var date = new Date();
  let leapYear = false; //se è un anno bisestile



  useEffect(()=> {
    calendar.anni_bisestili.map( y => date.getFullYear() == y ? leapYear = true : leapYear = false)
    getSlotsTime()
    generateDays( date.getDate(), date.getMonth() +1, date.getFullYear(), date.getDay() )
    Global.month = getNameMounth();
  },[ refresh ])




//ritorna il nome del mese dato l'intero
 function getNameMounth () {
  switch (date.getMonth()) {
    case 0: return 'Gennaio'
    case 1: return 'Febbraio'
    case 2: return 'Marzo'
    case 3: return 'Aprile'
    case 4: return 'Maggio'
    case 5: return 'Giugno'
    case 6: return 'Luglio'
    case 7: return 'Agosto'
    case 8: return 'Settembre'
    case 9: return 'Ottobre'
    case 10: return 'Novembre'
    case 11: return 'Dicembre'
    default:
      break;
  }
 }

 function getSlotsTime () {
  let s = []
  Global.restaurants[ Global.restaurantSelected ].orderTimeSlot.map(slot => {
    s.push(
      <div 
         style={{ 
          fontSize: 20, 
          margin: '14px',
          display: slot.limitOrders == slot.numbersOrdersReceived ? 'none' : '' ,  
          scale: Global.hoursOrder == slot.slot ? '1.3' : '1'
         }} 
         onClick={() => { 
          if( slot.limitOrders == slot.numbersOrdersReceived ) return;
          Global.hoursOrder = slot.slot;
          setRefresh(!refresh);
         }}>{ slot.slot }</div>
    )
  })
  setSlotsTime( s )
 }


 //ritorna true/false se il negozio è aperto in quel giorno
  function getDayWeek(day, mounth, year){
    let d = new Date( year, mounth , day)
    let dw = d.getDay()
    return Global.restaurants[ Global.restaurantSelected ].openingTime[ dw ].open
  }


  //genera i giorni da mostrare a video 
  function generateDays ( day, mounth) {
    let d = [];
    for( let index = 1; index <= ( ( calendar.mesi[mounth] ) + ( mounth == 2 && leapYear ? 1 : 0 ) )  ; index++ ) {
        d.push( <div 
         style={{ 
          fontSize: 30, 
          margin: '10px',
          textShadow: Global.dateOrder == index ? '2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff, 1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff' : '',
          color: index < day ? 'rgb(218, 218, 218)' : !getDayWeek( index, date.getMonth(), date.getFullYear() ) ? 'rgb(218, 218, 218)' : Global.dateOrder == index ? 'orange' : '' ,  
          scale: Global.dateOrder == index ? '1.3' : '1'
         }} 
         onClick={() => { 
          if( !getDayWeek( index, date.getMonth(), date.getFullYear() ) || index < day ) return
          Global.dateOrder = index; 
          setRefresh(!refresh)
         }}>{ index }</div> 
          )           
    };
      setDays(d)
  }

    return (
        <div className="borderRadius" style={{ width: '100vw', height: '90vh', backgroundColor:'', display:'flex', flexDirection:'column', marginTop: '25px', alignItems:'center'}} >
          <div className="flexCenter" style={{ fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              Cosa vuoi fare?
          </div>

          <div 
            className={ `borderRadius ${Global.typeShop == 'Ritiro' ? 'borderSelected': 'border'} `} 
            style={{ width: '80%', height: '20vh', backgroundColor:'', margin:'10px', display: Global.restaurants[ Global.restaurantSelected ].takeAway ? 'flex' : 'none', flexDirection:'column', justifyContent: 'center', alignItems:'center' }}
            onClick={() => {
              Global.typeShop = 'Ritiro';
              setRefresh(!refresh)
            }}
           >
              <div style={{  height: '65%', backgroundColor:'' }}>
                <img src={ Global.iconTakeAway } alt="ritiro"  style={{height: '90%',filter: 'brightness(0) invert(1)'}}/>  
              </div>
              <div className="flexCenter" style={{ fontSize: 15, fontWeight: 'bold', color: 'white'}}>
                RITIRO IN SEDE
              </div>
          </div>

          <div 
            className={ `borderRadius ${Global.typeShop == 'Consegna' ? 'borderSelected': 'border'} `}
            style={{ width: '80%', height: '20vh', backgroundColor:'', margin:'10px',  display: Global.restaurants[ Global.restaurantSelected ].delivery ? 'flex' : 'none', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}
            onClick={() => {
              Global.typeShop = 'Consegna';
              setRefresh(!refresh)
             }}
          > 
            <div style={{  height: '65%', backgroundColor:'' }}>
              <img src={ Global.iconDelivery } alt="consegna"  style={{ height:'90%', filter: 'brightness(0) invert(1)'}}/>  
            </div>
            <div className="flexCenter" style={{ fontSize: 15, fontWeight: 'bold', color: 'white'}}>
              CONSEGNA A CASA
            </div>
          </div>
          <div className="flexCenter" style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: '20px'}}>
              Quando?
          </div>
            <div style={{ display:'flex', flexDirection: 'row', alignItems:'center', width:'100%', fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: '0px', backgroundColor:'', overflow: 'auto', }}>
              {
                Global.restaurants[Global.restaurantSelected].ordersOnlyToday ?
                <></>
                :
                 days                
              }
            </div>
            <div className="flexCenter" style={{ fontSize: 20, fontWeight: 'bold', color: 'white', marginTop: '20px'}}>
              Seleziona un orario disponibile
            </div>
            <div style={{ display:'flex', flexDirection: 'row', alignItems:'center', width:'100%', fontSize: 25, fontWeight: 'bold', color: 'white', marginTop: '0px', backgroundColor:'', overflow: 'auto', }}>
              {
                slotsTime                
              }
            </div>
          <div className="flexCenter" style={{ fontSize: 15, fontWeight: 'bold', color: 'white', marginTop: '30px', width: '90%'}}>
              <ButtonPersonal
                nameButton={ Global.typeShop && ( Global.restaurants[ Global.restaurantSelected].ordersOnlyToday || ( !Global.restaurants[ Global.restaurantSelected].ordersOnlyToday && Global.dateOrder ) ) && Global.hoursOrder ? 'VAI AL MENU' : 'FAI UNA SCELTA'}
                func={async () => {
                  Global.typeShop ? navigate('/menu', { replace: true }) : Global.typeShop = false;
                }}
               />
          </div>
        </div>
    )
}