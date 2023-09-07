export function AvatarComponent( props ){

    return (
        <>
            <div className={ `avatar ${ props.addClass }` } 
                style={{
                    width: props.size,
                    height: props.size,
                    border: props.border ?? 'none',
                    borderWidth: props.borderWidth,
                    backgroundSize: props.bgSize,
                    backgroundColor: props.backgroundColor ?? 'none',
                    backgroundImage: `url(${props.imgUrl})`,
                }}
                
                onClick={ props.functionClick } 
            >
                { props.children }
            </div>
        </>
    )
}