/* eslint-disable prefer-const */
const facebookAppId = process.env.REACT_APP_FACEBOOK_AUTH_CLIENT_ID

function initFacebookSdk() {
  return new Promise(() => {
    // wait for facebook sdk to initialize before starting the react app
    window.fbAsyncInit = () => {
      window.FB.init({
        appId: facebookAppId,
        cookie: true,
        xfbml: true,
        version: 'v8.0'
      });
    };

    // load facebook sdk script
    (function init(d, s, id) {
      let js; const
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  });
}
export default initFacebookSdk
