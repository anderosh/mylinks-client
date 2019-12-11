import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export function singUp({ name, last_name, email, password }) {
  return async function() {
    try {
      await axios({
        method: 'post',
        url: `${baseURL}/sing-up`,
        data: {
          name,
          last_name,
          email,
          password
        }
      }).then(function({ data }) {
        if (data.auth) {
          localStorage.setItem('token', data.token);
          window.location.href = '/main';
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function loginReq({ email, password }) {
  return async function() {
    try {
      await axios({
        method: 'post',
        url: `${baseURL}/login`,
        data: {
          email,
          password
        }
      }).then(function({ data }) {
        if (data.auth) {
          localStorage.setItem('token', data.token);
          window.location.href = '/main';
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserLinks() {
  return async function(dispatch) {
    try {
      const links = await axios({
        method: 'get',
        url: `${baseURL}/my-links`,
        headers: {
          authorization: localStorage.getItem('token')
        }
      });
      return dispatch({
        type: 'GET_MY_LINKS',
        payload: links.data
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteLink(linkId) {
  return async function(dispatch) {
    try {
      await axios({
        method: 'delete',
        url: `${baseURL}/delete`,
        headers: {
          authorization: localStorage.getItem('token')
        },
        data: {
          linkId
        }
      });
      return dispatch({
        type: 'DELETE_LINK',
        payload: linkId
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function shortenLink({ url, name }) {
  return async function(dispatch) {
    try {
      const newLink = await axios({
        method: 'post',
        url: `${baseURL}/new-link`,
        headers: {
          authorization: localStorage.getItem('token')
        },
        data: {
          url,
          name
        }
      });
      return dispatch({
        type: 'NEW_LINK',
        payload: newLink.data
      });
    } catch (error) {
      console.log(error);
    }
  };
}
