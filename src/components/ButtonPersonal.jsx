import { Button }  from  "antd";

export function ButtonPersonal ( props ){

    return(
    <>
        <Button 
          disabled={ !props.disabled ? false : props.disabled } 
          className="button borderRadius" style={ props.addStyle ?? props.addStyle } 
          onClick={ props.func }> 
          { props.nameButton } 
        </Button>
    </>
    )
}