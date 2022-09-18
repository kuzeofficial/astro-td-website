import type React from "react";
import { useState } from "react";
import classNames from "classnames";
enum ResponseEnum {
  success,
  error,
}
export const FormEmail: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  function handleChangeEmail(event: React.FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }
  function handleSubmitEmail(event: React.FormEvent): ResponseEnum {
    try {
      // anything implementation
      setStatus(ResponseEnum.success.toString());
      return ResponseEnum.success;
    } catch {
      setStatus(ResponseEnum.error.toString());
      throw new Error(ResponseEnum.error.toString());
    }
  }
  if (status) {
    return (
      <div
        className={classNames(
          status !== "error"
            ? `px-4 h-full p-2 mb-4 text-green-700 dark:bg-green-600 dark:text-green-100 border rounded border-green-900/10 bg-green-50`
            : "px-4 h-full p-2 mb-4 text-red-700 dark:bg-red-600 dark:text-red-100 border rounded border-green-900/10 bg-red-50"
        )}
        role="alert"
      >
        <strong className="text-sm font-medium">Email has been sended!</strong>
      </div>
    );
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
