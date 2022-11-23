import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}
function Login() {
  const [login, setLogin] = useState(false);
  const { signIn, signUp } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    if (login) {
      await signIn(data.email, data.password);
    } else {
      await signUp(data.email, data.password);
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix2.0</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Image
        src="https://rb.gy/p2hphi"
        fill
        className="-z-10 !hidden opacity-60 sm:!inline"
        // objectFit="cover"
        alt="bg-image"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        width={100}
        height={100}
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        alt="logo"
      />
      <form
        className="relative mt-24 space-y-8 bg-black/75 rounded py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              autoComplete="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </label>
          <label className="inline-block w-full">
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="input"
            />
            {errors.password && <span>Password is required</span>}
          </label>
        </div>
        <button
          className="w-full rounded bg-[#e50914] py-3 font-semibold"
          onClick={() => setLogin(true)}
          type="submit"
        >
          Sign In
        </button>
        <div className="text-[gray]">
          New to Netflix?{" "}
          <button
            className="cursor-pointer text-white hover:underline"
            onClick={() => setLogin(false)}
            type="submit"
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
