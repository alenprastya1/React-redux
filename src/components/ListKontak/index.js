import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteKontak, detailKontak, getListKontak } from "../../action/kontakAction";

const ListKontak = () => {
  const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult } =
    useSelector((state) => state.kontakReducer);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getListKontak());
    // Panggil Action GET LIST KONTAK
  }, [dispatch]);

  useEffect (()=> {
    if(deleteKontakResult){
      dispatch(getListKontak())
    }
  },[deleteKontakResult, dispatch])
  return (

    <>
      <div>
        <h4>List Kontak</h4>
        {getListKontakResult ? (
          getListKontakResult.map((kontak) => {
            return (
              <p key={kontak.id}>
                {kontak.nama} - 
                {kontak.nohp} -
                <button onClick={()=> dispatch(deleteKontak(kontak.id))}>Hapus</button>
                <button style={{marginLeft : "10px"}} onClick={()=> dispatch(detailKontak(kontak))}>Edit</button>
              </p>
            );
          })
        ) : getListKontakLoading ? (
          <p>Loading . . . </p>
        ) : (
          <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
        )}
      </div>
    </>
  );
};

export default ListKontak;
