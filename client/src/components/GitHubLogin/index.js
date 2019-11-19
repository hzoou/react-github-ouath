import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Styled from './style';

import axios from 'axios';
import Logo from '../../image/githubLogo.svg';
import PopupWindow from './PopupWindow';
import { toQuery } from '../../utils';

class GitHubLogin extends Component {
    static propTypes = {
        buttonText: PropTypes.string,
        children: PropTypes.node,
        clientSecret: PropTypes.string,
        clientId: PropTypes.string.isRequired,
        onSuccess: PropTypes.func,
        onFailure: PropTypes.func,
        redirectUri: PropTypes.string,
    };

    onBtnClick = () => {
        const { clientId, redirectUri } = this.props;

        const query = toQuery({
            client_id: clientId,
            redirect_uri: redirectUri,
        });

        const popup = PopupWindow.open(
            'github-oauth-authorize',
            `https://github.com/login/oauth/authorize?${query}`,
            { height: 1000, width: 600 }
        );

        popup.then(
            data => this.onSuccess(data),
            error => this.onFailure(error)
        );
    };

    onSuccess = async data => {
        try {
            const query = toQuery({
                client_id: this.props.clientId,
                client_secret: this.props.clientSecret,
                code: data.code,
            });

            const accessTokenResult = await axios({
                method: 'post',
                url: `https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token?${query}`,
                headers: {
                    accept: 'application/json',
                }
            });

            const accessToken = accessTokenResult.data.access_token;

            const userResult = await axios({
                method: 'get',
                url: `https://api.github.com/user`,
                headers: {
                    Authorization: `token ${accessToken}`
                },
            });

            const { login, avatar_url } = userResult.data;
            this.props.onSuccess({ username: login, profile: avatar_url });
        } catch (e) {
            this.onFailure();
        }
    };

    onFailure = (error) => {
        console.log(error);
        this.props.onFailure('로그인 실패');
    };

    render = () => {
        const { buttonText, children } = this.props;
        const attrs = { onClick: this.onBtnClick };

        return <Styled.Button {...attrs}>
            <Styled.Logo src={Logo}/>
            <Styled.Text>{buttonText}</Styled.Text>
        </Styled.Button>;
    }
}

export default GitHubLogin;