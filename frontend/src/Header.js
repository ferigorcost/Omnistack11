import React from 'react';

/* export default function Header(){
    return (
        <header>Be The Hero</header>
    );
}
 */
export default function Header({ children }){
    return (
    <header>
        <h1>{ children }</h1>
    </header>
    );
}

/* export default function Header(props){
    return (
    <header>
        <h1>{props.children}</h1>
    </header>
    );
} */
// Desestruturação
/* export default function Header({ children }){
    return (
    <header>
        <h1>{children}</h1>
    </header>
    );
} */