import React, { useState } from "react";
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import axios from "axios";

const Signup = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [favor_ctg, setFavor_ctg] = useState("");
  const [photo, setPhoto] = useState("");
  const [birth_date, setBirth_date] = useState("");

  const setIdText = e => {
    setId(e.target.value);
  };

  const setNameText = e => {
    setName(e.target.value);
  };

  const setNicknameText = e => {
    setNickname(e.target.value);
  };

  const setPhonenumberText = e => {
    setPhonenumber(e.target.value);
  };

  const setEmailText = e => {
    setEmail(e.target.value);
  };

  const setAddressText = e => {
    setAddress(e.target.value);
  };

  const setFavor_ctgText = e => {
    setFavor_ctg(e.target.value);
  };

  const setPhotoText = e => {
    setPhoto(e.target.value);
  };

  const setBirth_dateText = e => {
    setBirth_date(e.target.value);
  };

  const save = e => {
    e.preventDefault();
    const URL = "http://localhost:9090/rest/addMem";
    const data = {
      uid: { id },
      uname: { name },
      unickname: { nickname },
      uphonenum: { phonenumber },
      uemail: { email },
      uaddress: { address },
      ufavor_ctg: { favor_ctg },
      uphoto: { photo },
      ubirth_date: { birth_date }
    };
    axios.post(URL, data);
  };

  return (
    <form onSubmit={save}>
      <FormLabel htmlFor="id">ID</FormLabel>
      <Input name="id" id="id" onChange={setIdText} />
      <br />
      <FormLabel htmlFor="name">Name</FormLabel>
      <Input name="name" id="name" onChange={setNameText} />
      <br />
      <FormLabel htmlFor="name">Nickname</FormLabel>
      <Input name="nickname" id="nickname" onChange={setNicknameText} />
      <br />
      <FormLabel htmlFor="phonenumber">Phonenumber</FormLabel>
      <Input
        name="phonenumber"
        id="phonenumber"
        onChange={setPhonenumberText}
      />
      <br />
      <FormLabel htmlFor="email">Email</FormLabel>
      <Input name="email" id="email" onChange={setEmailText} />
      <br />
      <FormLabel htmlFor="address">Address</FormLabel>
      <Input name="address" id="address" onChange={setAddressText} />
      <br />
      <FormLabel htmlFor="favor_ctg">Favor_ctg</FormLabel>
      <Input name="favor_ctg" id="favor_ctg" onChange={setFavor_ctgText} />
      <br />
      <FormLabel htmlFor="photo">Photo</FormLabel>
      <Input name="photo" id="photo" onChange={setPhotoText} />
      <br />
      <FormLabel htmlFor="birth_date">Birth_date</FormLabel>
      <Input name="birth_date" id="birth_date" onChange={setBirth_dateText} />
      <br />
      <Input type="submit" value="제출" />
    </form>
  );
};

export default Signup;
