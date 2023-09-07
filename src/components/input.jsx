import {Form, Input, InputNumber, Tooltip } from  "antd";

export function InputField ( props ) {

    return(
        <>
            <Form.Item label={ props.label } dependencies={ props.dependencies } name={ props.nameItem } style={{ marginBottom: '0' }} rules={ props.rules } >
                {
                    props.password 
                    ?
                        <Input.Password 
                            className="input borderRadius" 
                            placeholder={ props.placeholder }
                        />
                    :
                     props.number
                    ?
                     <InputNumber
                        className="input borderRadius" 
                        placeholder={ props.placeholder }
                        suffix={
                            <Tooltip title={ props.infoIcon }>
                                { props.iconSuffix }
                            </Tooltip>
                        }
                    />
                    :
                    !props.number && !props.password
                    ?
                    <Input
                        className="input borderRadius" 
                        placeholder={ props.placeholder }
                        suffix={
                            <Tooltip title={ props.infoIcon }>
                                { props.iconSuffix }
                            </Tooltip>
                        }
                    />
                    :
                    <></>
                }
            </Form.Item>
        </>
    )
}