
import { useState } from "react";
export enum ResponseEnum {
  neutral,
  error,
  success,
}
export const useEmailForm = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<ResponseEnum>();
  function handleChangeEmail(event: React.FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);
  }
  function handleSubmitEmail(event: React.FormEvent): ResponseEnum {
    try {
      // anything implementation
      setStatus(ResponseEnum.success);
      return ResponseEnum.success;
    } catch {
      setStatus(ResponseEnum.error);
      throw new Error(ResponseEnum.error.toString());
    }
  }
  return {email, status, handleChangeEmail, handleSubmitEmail}
}
