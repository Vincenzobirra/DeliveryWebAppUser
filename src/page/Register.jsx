import { Global } from "../Global";
import { Form, Radio } from "antd";
import { InputField } from "../components/input";
import { ButtonPersonal } from "../components/ButtonPersonal";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AvatarComponent } from "../components/Avatar";
import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { ModalPersonal } from "../components/ModalPersonal";

export function Register () {

  const [ form ] = Form.useForm()
  const  navigate  = useNavigate()
  const [ contract, setContract ] = useState( false )
  const [showModal, setShomodal ] = useState( false )
  Global.showModalContract = setShomodal;

    return (
      <>
      <ModalPersonal show={ showModal } onOk={() => setShomodal(false)}/>
        <div className="" style={{ fontSize: 15, fontWeight: 'bold', color: 'white', position: "absolute", right: '5%', top: '5%'}} onClick={() => { navigate('/login', {replace: true})}}>
              Login
        </div>
        <div className="flexCenter" style={{paddingTop: '0%'}}>
          <img className=""  src={ Global.logo }  style={{ width:'30%' }} alt="logo" />
       
        </div>
        <div style={{padding: '18px'}}>
          <Form form={form} className="borderRadius  ">

            <div className="flexCenter" style={{ fontSize: 25, fontWeight: 'bold', color: 'white'}}>
              Iscriviti
            </div>
              <InputField
                label=''
                nameItem='name'
                rules = {[{ required: true, min: 3, message: 'Inserisci un nome valido' , type: "text"}]}
                placeholder='Nome'
                password={ false }
                iconSuffix={ <UserOutlined style={{ color: 'rgba(0,0,0,.45)' }}/> }
                infoIcon={'Inserisci il tuo nome'}
              />
              <InputField
                label=''
                nameItem='surname'
                rules = {[{ required: true, min: 3, message: 'Inserisci un cognome valido' , type: "text"}]}
                placeholder='Cognome'
                password={ false }
                iconSuffix={ <UserOutlined style={{ color: 'rgba(0,0,0,.45)' }}/> }
                infoIcon={'Inserisci il tuo cognome'}
              />

              <InputField
                label=''
                nameItem='email'
                rules = {[{ required: true, message: 'Inserisci un email valida' , type: "email"}]}
                placeholder='Email'
                password={ false }
                iconSuffix={ <MailOutlined style={{ color: 'rgba(0,0,0,.45)' }}/> }
                infoIcon={'Inserisci la tua email'}
              />

              <InputField
                label = ''
                nameItem = 'password'
                rules = {[{ required: true, min: 8, message: 'La password deve contenere min. 8 caratteri' }]}
                placeholder = 'Password'
                password={ true }
              />

              <InputField
                label = ''
                nameItem = 'passwordConfirm'
                rules = {[{ 
                  required: true, 
                },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('La password non corrisponde'));
                    },
                  }),
                ]}
                placeholder = 'Conferma password'
                password={ true }
                dependencies={['password']}
              />

              <InputField
                label = ''
                nameItem = 'phone'
                rules = {[{ required: true, min: 9, message: 'Inserire un numero valido', type:'' }]}
                placeholder = 'Telefono'
                password={false}
                iconSuffix={ <PhoneOutlined style={{ color: 'rgba(0,0,0,.45)' }}/> }
                infoIcon={'Il tuo numero è utilizzato solo ai fini dell`ordine'}
              />
              <div className="flexCenter">Accetta &nbsp;
                <span> <em style={{textDecoration: 'underline'}} onClick={ () => { setShomodal( true )} }> Termini e Condizioni </em> &nbsp; </span> 
                  <AvatarComponent 
                     size='20px' 
                     border='solid' 
                     borderWidth='1px' 
                     backgroundColor={contract ? 'green' : 'white' }
                     children={ <AvatarComponent size={ contract ? '0px' : '4px' } backgroundColor={ contract ? 'none' : 'red'} addClass='centerRelative'/>}
                     functionClick={() => {setContract(!contract)} }
                 /></div>
              <ButtonPersonal
                nameButton = { contract ? 'Iscriviti' : 'Accetta termini e condizioni' }
                disabled = { contract ? false : true }
                func={ async () => {
                  try{
                    let result = await form.validateFields()
                    if( result.email ){
                      navigate('/dashboard', {replace: true})
                    }
                    console.log(result)
                  }catch(e){console.log(e)}
                }}
              />
          </Form>

          <div className="flexCenter" style={{ fontSize: 13, fontWeight: '', color: 'white', paddingTop: '20px'}}>
              Accedi con:
          </div>
          <div className="flexCenter" style={{justifyContent: 'space-around', paddingTop: '5%'}}>
        
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