import type React from "react";

export const FormEmail: React.FC = () => {
  return (
    <form className="flex gap-2.5">
      <input
        type="email"
        className="w-full dark:text-white dark:bg-[#323232] h-full p-2 text-base border-[#ccc] rounded border "
        placeholder="Enter email"
      />
      <button
        className="px-2.5 bg-[#2196f3] text-white disabled:opacity-70 font-semibold text-sm rounded"
        type="submit"
      >
        Suscribe
      </button>
    </form>
  );
};
