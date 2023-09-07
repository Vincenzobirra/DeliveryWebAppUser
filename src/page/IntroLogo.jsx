import { useEffect } from "react";
import { Global } from "../Global";
import { useNavigate } from "react-router-dom";

export function Intro_Logo () {

  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => navigate('/logIn',{replace: true}), 3000 )
  }, [])

    return (
        <div className="introLogo" >
          <img className="center"  src={ Global.logo }  style={{ width:'80%' }} alt="logo" />
        </div>
    )
}