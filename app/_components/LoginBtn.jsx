"use client";

import { signIn, signOut } from "next-auth/react";

function LoginBtn({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? (
        <button
          onClick={() => {
            signOut();
          }}
        >
          로그아웃
        </button>
      ) : (
        <button
          onClick={() => {
            signIn();
          }}
        >
          로그인
        </button>
      )}
    </>
  );
}

export default LoginBtn;
