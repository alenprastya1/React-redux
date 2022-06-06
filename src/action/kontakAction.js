import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const DETAIL_KONTAK = "DETAIL_KONTAK";
export const UPDATE_KONTAK = "UPDATE_KONTAK";

export const getListKontak = () => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // Get API
    axios({
      method: "GET",
      url: "http://localhost:3004/Kontaks",
      timeout: 120000,
    })
      .then((response) => {
        // Berhasil
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // Error
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addKontak = (data) => {
  console.log("Menambahkan Data");
  return (dispatch) => {
    // Loading
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // Get API
    axios({
      method: "POST",
      url: "http://localhost:3004/Kontaks",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // Berhasil
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // Error
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteKontak = (id) => {
  console.log("Menambahkan Data");
  return (dispatch) => {
    // Loading
    dispatch({
      type: DELETE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // Get API
    axios({
      method: "DELETE",
      url: "http://localhost:3004/Kontaks/" + id,
      timeout: 120000,
    })
      .then((response) => {
        // Berhasil
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // Error
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailKontak = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL_KONTAK,
      payload: {
        data: data,
      },
    });
  };
};

export const updateKontak = (data) => {
  return (dispatch) => {
    // Loading
    dispatch({
      type: UPDATE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    // Get API
    axios({
      method: "PUT",
      url: "http://localhost:3004/Kontaks/" + data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // Berhasil
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // Error
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
