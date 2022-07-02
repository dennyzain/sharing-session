import React from 'react';
import BackgroundImage from 'assets/images/backgroundLogin.png';
import BackgroundLeft from 'assets/images/backgroundLoginLeft.png';
import Icon from 'assets/images/icon.png';
import TextInput from 'components/TextInput';
import Image from 'next/image';
import { Field, Form } from 'react-final-form';
import LoginValidation from '../Validation/LoginValidation';

export default function LoginComponent() {
  return (
    <>
      <div className="min-h-screen min-w-screen p-12 z-1">
        <Image src={BackgroundImage.src} layout="fill" alt="background" />
      </div>
      <div className="absolute top-0 w-full p-24 px-52 ">
        <div className="bg-white flex rounded-2xl">
          <div className="flex-1 p-20">
            <div className="w-full h-full relative">
              <Image src={BackgroundLeft.src} layout="fill" alt="background" />
            </div>
          </div>
          <div className="flex-1 m-10">
            <div className="block text-center">
              <Image src={Icon.src} width={80} height={80} alt="background" />
            </div>
            <p className="text-center text-xl">
              <span className="text-[#4aa5ff] font-bold">Courier</span>
              <span className="text-[#4aa5ff]">Command</span>
              <span className="text-[#4aa5ff] font-bold">Center</span>
            </p>
            <p className="text-center text-[#4aa5ff] font-bold mb-6">Portal</p>
            <Form onSubmit={() => {}} subscription={{ invalid: true }} validate={LoginValidation}>
              {(formProps) => {
                return (
                  <>
                    <div className="mb-4">
                      <Field
                        name="username"
                        placeholder="Masukkan username"
                        id="username"
                        type="text"
                        render={TextInput}
                      />
                    </div>
                    <div className="mb-8">
                      <Field
                        name="password"
                        placeholder="Masukkan kata sandi"
                        id="password"
                        type="password"
                        render={TextInput}
                      />
                    </div>
                    <div className="block text-center">
                      <button
                        disabled={formProps.invalid}
                        type="submit"
                        className="w-[250px] rounded-full text-white bg-[#4aa5ff] focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none disabled:bg-blue-800 disabled:cursor-not-allowed"
                      >
                        MASUK
                      </button>
                    </div>
                  </>
                );
              }}
            </Form>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 w-full text-center text-white text-sm">
        <p>©CopyRight 2020, Design by QSI</p>
      </div>
    </>
  );
}
