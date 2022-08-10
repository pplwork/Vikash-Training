import React, { useContext, useState } from "react";
import CreateContactComponent from "../../components/createContacts";
import createContacts from "../../context/actions/contacts/createContacts";
import { GlobalContext } from "../../context/Provider";

const CreateContact = () => {
  const {
    contactsDispatch,
    contactsState: {
      createContacts: { loading, error, data },
    },
  } = useContext(GlobalContext);
  const [form, setform] = useState();
  const onCahngeText = ({ name, value }) => {
    setform({ ...form, [name]: value });
  };

  const onSubmit = () => {
    console.log(form);
    createContacts(form)(contactsDispatch);
  };

  console.log("error, loading", error, loading);
  return (
    <CreateContactComponent
      loading={loading}
      onSubmit={onSubmit}
      onCahngeText={onCahngeText}
      form={form}
      setForm={setform}
      error={error}
    />
  );
};

export default CreateContact;
