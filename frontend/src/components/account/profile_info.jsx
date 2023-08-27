// import { Input } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { inputData, inputData2 } from "../../utils/formdata";
import FormInput from "../forms/Input";

export default function ProfileInfo({ type }) {
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    password: "",
    username: "",
  });
  const onChange = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  return (
    <>
      <ProfileInfoContainer>
        <div className="ProfileInfoCenter column gap-2 flex w-85 auto">
          <h2 className="fs-35">Personal info</h2>
          <div className="wrapper">
            <div className="flex column gap-1">
              {/* name lagal */}
              <div className="flex bottom column gap-1">
                <span className="text-dark text-bold fs-18">
                  Legal name
                  <span className="text-grey text-light block fs-16">
                    This is the name on your travel document, which could be a
                    license or a passport.
                  </span>
                </span>
                <div className="flex gap-1 item-center justify-space w-100">
                  {inputData2?.slice(0, 2).map((input) => {
                    return (
                      <FormInput
                        label={input.text}
                        onChange={onChange}
                        type={input.type}
                        name={input.name}
                        value={formdata[input.name]}
                        input={input}
                        key={input.id}
                        required={input.required}
                        pattern={input.pattern}
                        errorMessage={input.errorMessage}
                      />
                    );
                  })}
                </div>
              </div>
              {/* email legal */}
              <div className="flex bottom column gap-1">
                <span className="text-dark text-bold fs-18">
                  Email
                  <span className="block text-light fs-16">
                    Use an address you’ll always have access to.
                  </span>
                </span>
                <div className="flex gap-1 item-center justify-space w-100">
                  <FormInput
                    label={inputData2[2].text}
                    onChange={onChange}
                    type={inputData2[2].type}
                    name={inputData2[2].name}
                    value={formdata[inputData2[2].name]}
                    input={inputData2[2]}
                    key={inputData2[2].id}
                    required={inputData2[2].required}
                    pattern={inputData2[2].pattern}
                    errorMessage={inputData2[2].errorMessage}
                  />
                </div>
              </div>
              {/* phone number */}
              <div className="flex bottom bottom1 column gap-1">
                <span className="text-dark text-bold fs-18">
                  Phone numbers
                  <span className="block text-light fs-16">
                    Add a number so confirmed guests and Airbnb can get in
                    touch. You can add other numbers and choose how they’re
                    used.
                  </span>
                </span>
                <div className="flex gap-1 item-center justify-space w-100">
                  <FormInput
                    label={inputData2[3].text}
                    onChange={onChange}
                    type={inputData2[3].type}
                    name={inputData2[3].name}
                    value={formdata[inputData2[3].name]}
                    input={inputData2[3]}
                    key={inputData2[3].id}
                    required={inputData2[3].required}
                    pattern={inputData2[3].pattern}
                    errorMessage={inputData2[3].errorMessage}
                  />
                </div>
              </div>
              <div className="flex">
                <div className="edit btn_1 fs-16 text-white">Save</div>
              </div>
            </div>
            <div className="flex column gap-1"></div>
          </div>
        </div>
      </ProfileInfoContainer>
    </>
  );
}

const ProfileInfoContainer = styled.div`
  width: 100%;
  padding: 1rem 0;
  margin: 7rem;
  @media (max-width: 980px) {
    margin: 5rem auto;
  }
  .ProfileInfoCenter {
    width: 75%;
    @media (max-width: 780px) {
      width: 90%;
    }
  }
  .bottom.bottom1 {
    border: none !important;
  }
  .edit {
    padding: 0.7rem 2rem;
    border-radius: 10px;
    cursor: pointer;
    color: #fff !important;
    background-color: #000;
    &:hover {
      opacity: 0.7;
    }
  }
  .wrapper {
    display: grid;
    width: 100% !important;
    padding: 0;
    border: none;
    grid-template-columns: 1fr 30vw;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
    }
  }
  .headBtn {
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 0.6rem 1.7rem;
    border-radius: 40px;
  }
`;
