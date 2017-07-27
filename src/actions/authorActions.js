import AuthorApi from '../api/mockAuthorApi';
import * as types from './actionTypes';

const loadAuthorsSuccess = (authors) => {
  return {
    type: types.LOAD_AUTHORS_SUCESS,
    authors
  };
};

const loadAuthors = () => {
  return (dispatch) => {
    return AuthorApi.getAllAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      }).catch(error => {
        throw (error);
      });
  };
};

export { loadAuthorsSuccess, loadAuthors };