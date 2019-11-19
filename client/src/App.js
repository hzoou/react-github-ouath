import dotenv from 'dotenv';

import React from 'react';
import GitHubLogin from './components/GitHubLogin';
import GitHubLogin2 from './components/GitHubLogin2';

dotenv.config();

function App() {
    function onSuccessGithub(response) {
        console.log('로그인 성공', response);
    }

    function onFailureGithub() {
        console.log('로그인 실패');
    }

    return (
        <>
            <GitHubLogin
                clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
                clientSecret={process.env.REACT_APP_GITHUB_CLIENT_SECRET}
                redirectUri="http://localhost:3000/"
                onSuccess={onSuccessGithub}
                onFailure={onFailureGithub}
                buttonText="Sign in with GitHub - Client"
            />
            <GitHubLogin2 />
        </>
    );
}

export default App;
