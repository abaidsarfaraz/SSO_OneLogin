import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    issuer: 'https://abaid.onelogin.com/oidc/2',

    redirectUri: window.location.origin + '/index',

    clientId: '41d3a740-e78e-013d-ebc7-0099d1d19ae6246746',
    dummyClientSecret:'8dac913803fa9da7ce53b6dfe8829619b5f9a219c96b9bdde0fbc0d4576f486a',
    responseType: 'code',
    scope: 'openid profile email',
    postLogoutRedirectUri: 'http://localhost:4200',
}