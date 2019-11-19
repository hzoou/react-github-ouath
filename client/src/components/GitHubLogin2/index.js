import React from 'react';

import * as Styled from './style';
import Logo from "../../image/githubLogo.svg";

function GitHubLogin2() {
    return (
        <Styled.Button>
            <Styled.Logo src={Logo}/>
            <Styled.Link href="http://localhost:4000/api/login" target="_blank" >Sign in with GitHub - Server</Styled.Link>
        </Styled.Button>
    )
}
export default GitHubLogin2;