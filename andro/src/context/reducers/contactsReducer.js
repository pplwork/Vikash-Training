import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from "../../constants/actionTypes";

const contacts = (state, { type, payload }) => {
  switch (type) {
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
          ...state.getContacts,
          loading: false,
          error: null,
          data: payload,
        },
        getContacts: {
          ...state.getContacts,
          data: [...payload, state.getContacts.data],
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
