import { Global } from "../Global";
import { Form } from "antd";
import { InputField } from "../components/input";
import { ButtonPersonal } from "../components/ButtonPersonal";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AvatarComponent } from "../components/Avatar";
import { MailOutlined } from '@ant-design/icons'

export function LogIn () {

  const [ form ] = Form.useForm()
  const  navigate  = useNavigate()


    return (
      <>
        <div className="flexCenter" style={{paddingTop: '7%'}}>
          <img className=""  src={ Global.logo }  style={{ width:'50%' }} alt="logo" />
        </div>
        <div style={{padding: '18px'}}>
          <Form form={form} className="borderRadius  ">

            <div className="flexCenter" style={{ fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              Login
            </div>
           
              <InputField
                label=''
                nameItem='email'
                rules = {[{ required: true, message: 'Inserisci un email valida' , type: "email"}]}
                placeholder='Email'
                password={ false }
                number={ false }
                iconSuffix={ <MailOutlined style={{ color: 'rgba(0,0,0,.45)' }}/> }
                infoIcon={'Inserisci la tua email'}
              />

              <InputField
                label = ''
                nameItem = 'password'
                rules = {[{ required: true,  message: 'La password deve contenere min. 8 caratteri' }]}
                placeholder = 'Password'
                password={ true }
                number={ false }
              />

              <div className="flexCenter" style={{ fontSize: 14, fontWeight: '', color: 'white', paddingTop: '10px'}}>
                 Hai dimenticato la password?<span  style={{fontWeight: 'bold', fontFamily: 'Noto Sans'}}onClick={() => { navigate('/register') }}>&nbsp; Recupera.</span>
              </div>

              <ButtonPersonal
                nameButton = 'Accedi'
                func={ async () => {
                  try{
                    let result = await form.validateFields()
                    if( result.email ){
                      navigate('/deliveryOrCollection', {replace: true})
                    }
                    console.log(result)
                  }catch(e){console.log(e)}
                }}
              />

              <ButtonPersonal
                nameButton = 'Vai al menu'
                func={ async () => {
                 Global.restaurants.length == 1 ? navigate('/deliveryOrCollection', {replace: true}) : navigate('/selectRestaurant', { replace: true })
                }}
                addStyle={ { backgroundColor: 'greyLight', color: 'white', marginTop: '20px', } }
              />
          </Form>

          <div className="flexCenter" style={{ fontSize: 13, fontWeight: '', color: 'white', paddingTop: '10px'}}>
              Non hai ancora un account?<span onClick={() => { navigate('/register') }}>&nbsp; Registrati.</span>
          </div>
          <div className="flexCenter" style={{justifyContent: 'space-around', paddingTop: '10%'}}>
        
             <AvatarComponent
              size='50px'
              bgSize='170%'
              imgUrl='https://logodownload.org/wp-content/uploads/2017/05/google-chrome-logo-0.png'
              functionClick={()=>{ console.log('google')}}
            />
            <AvatarComponent
              size='50px'
              bgSize='170%'
              imgUrl='https://static.vecteezy.com/system/resources/previews/018/930/476/original/facebook-logo-facebook-icon-transparent-free-png.png'
              functionClick={()=>{ console.log('fb')}}
            /> 
            
          </div>
        </div>
      </>
    )
}