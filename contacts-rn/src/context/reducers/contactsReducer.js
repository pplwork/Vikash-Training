import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
  DELETE_CONTACTS_FAIL,
  DELETE_CONTACTS_LOADING,
  DELETE_CONTACTS_SUCCESS,
  EDIT_CONTACTS_FAIL,
  EDIT_CONTACTS_LOADING,
  EDIT_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../constants/actionTypes';

const contacts = (state, {type, payload}) => {
  switch (type) {
    case EDIT_CONTACTS_LOADING:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: true,
          error: null,
        },
      };

    case EDIT_CONTACTS_FAIL:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: false,
          error: null,
        },
      };

    case EDIT_CONTACTS_SUCCESS:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: false,
          error: null,
        },
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: state.getContacts.data.map(item => {
            if (item.id === payload.id) {
              return payload;
            } else {
              return item;
            }
          }),
        },
      };

    case DELETE_CONTACTS_LOADING:
      return {
        ...state,
        deleteContacts: {
          ...state.deleteContacts,
          loading: true,
          error: null,
        },
      };
    case DELETE_CONTACTS_SUCCESS:
      return {
        ...state,
        deleteContacts: {
          ...state.deleteContacts,
          loading: false,
          error: null,
        },
        getContacts: {
          ...state.getContacts,
          loading: false,
          data: state.getContacts.data.filter(item => item.id !== payload),
        },
      };
    case DELETE_CONTACTS_FAIL:
      return {
        ...state,
        deleteContacts: {
          ...state.deleteContacts,
          loading: false,
          error: null,
        },
      };

    case GET_CONTACTS_LOADING:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: true,
          error: null,
        },
      };
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          data: payload,
          loading: false,
          error: null,
        },
      };
    case GET_CONTACTS_FAIL:
      return {
        ...state,
        getContacts: {
          ...state.getContacts,
          loading: false,
          error: payload,
        },
      };
    case CREATE_CONTACTS_LOADING:
      return {
        ...state,
        createContacts: {
          ...state.getContacts,
          loading: true,
          error: null,
        },
      };
    case CREATE_CONTACTS_SUCCESS:
      return {
        ...state,
        createContacts: {
          ...state.createContacts,
          loading: false,
          error: null,
          data: payload,
        },
        getContacts: {
          ...state.getContacts,
          data: [...state.getContacts.data, payload],
          loading: false,
          error: null,
        },
      };
    case CREATE_CONTACTS_FAIL:
      return {
        ...state,
        createContacts: {
          ...state.getContacts,
          loading: false,
          error: payload,
          data: null,
        },
      };
    default:
      return state;
  }
};
export default contacts;
