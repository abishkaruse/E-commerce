import React, { useReducer, useRef } from "react";
import TextInput from "../../InputFields/TextInput";
import OrangeButton from "../../Button/OrangeButton";
import { useState } from "react";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt, FaRegAddressBook } from "react-icons/fa";
import Ordersuccess from "./Ordersuccess";

const UserDetails = () => {
  const [err, setErr] = useState(0);
  const name = useRef();
  const phone = useRef();
  const address = useRef();

  const handleProceed = () => {
    console.log("name", name.current?.value);
    if (
      name.current?.value == "" ||
      name.current?.value == null ||
      name.current?.value.length < 3
    ) {
      setErr(1);
    } else if (phone.current?.value == "") {
      setErr(2);
    } else if (address.current?.value == "") {
      setErr(3);
    } else {
      setErr(0);
    }
    console.log(err);
  };
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <FaUserLarge />
        <label className="text-sm">Name: </label>
      </div>
      <TextInput
        label={"Name"}
        placeholder={"Enter your Name"}
        ref={name}
        err={err == 1 && true}
      />
      <div className="flex flex-wrap gap-2">
        <FaPhoneAlt />
        <label className="text-sm">Phone:</label>
      </div>

      <TextInput
        label={"Phone"}
        placeholder={"Enter your Phone Number"}
        ref={phone}
        err={err == 2 && true}
      />
      <div className="flex flex-wrap gap-2">
        <FaRegAddressBook />
        <label className="text-sm">Address: </label>
      </div>
      <TextInput
        label={"Address"}
        placeholder={"Enter your Address"}
        ref={address}
        err={err == 3 && true}
      />

      <div className="flex justify-center">
        <OrangeButton title={"Process"} onClick={() => handleProceed()} />
      </div>
    </div>
  );
};

export default UserDetails;
