import type React from "react";
import { useState } from "react";
export const FormEmail: React.FC = () => {
  const [email, setEmail] = useState("");
  function handleChangeEmail(event: React.FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }
  function handleSubmitEmail(event: React.FormEvent) {
    return;
  }
  return (
    <form onSubmit={handleSubmitEmail} className="flex gap-2.5">
      <input
        type="email"
        value={email}
        onChange={handleChangeEmail}
        className="w-full dark:text-white dark:bg-[#323232] h-full p-2 text-base border-[#ccc] rounded-md border "
        placeholder="Enter email"
      />
      <button
        className="px-2.5 bg-[#2196f3] text-white disabled:opacity-70 font-semibold text-sm rounded"
        disabled={email === ""}
        type="submit"
      >
        Suscribe
      </button>
    </form>
  );
};
