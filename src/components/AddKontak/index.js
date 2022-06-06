import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addKontak,
  getListKontak,
  updateKontak,
} from "../../action/kontakAction";

const AddKontak = () => {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  const { addKontakResult, detailKontakResult, updateKontakResult } =
    useSelector((state) => state.kontakReducer);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id) {
      dispatch(
        updateKontak({
          id: id,
          nama: nama,
          nohp: nohp,
        })
      );
    } else {
      dispatch(
        addKontak({
          nama: nama,
          nohp: nohp,
        })
      );
    }
  };
  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult, dispatch]);

  useEffect(() => {
    if (updateKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
      setId("");
    }
  }, [updateKontakResult, dispatch]);

  return (
    <div>
      <h4>{id ? "Edit Kontak " : "Add kontak"}</h4>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="nama"
          placeholder="Masukan Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="text"
          name="nohp"
          placeholder="Masukan No Hp"
          value={nohp}
          onChange={(e) => setNohp(e.target.value)}
        />
        <button type="submit"> Submit</button>
      </form>
    </div>
  );
};

export default AddKontak;
