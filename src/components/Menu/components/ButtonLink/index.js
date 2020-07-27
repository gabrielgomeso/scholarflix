import React from 'react';

function ButtonLink(props){
    return(
        <a href={props.href} className={props.className}>
            Novo Vídeo
        </a>
    );
}

export default ButtonLink;