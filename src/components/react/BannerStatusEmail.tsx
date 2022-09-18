import { ResponseEnum } from "@/hooks/useEmailForm";
import classNames from "classnames";

type BannerStatusEmailProps = {
  status: ResponseEnum;
};

export const BannerStatusEmail = ({ status }: BannerStatusEmailProps) => {
  return (
    <div
      className={classNames(
        status === ResponseEnum.error
          ? "px-4 h-full p-2 mb-4 text-red-700 dark:bg-red-600 dark:text-red-100 border rounded border-green-900/10 bg-red-50"
          : `px-4 h-full p-2 mb-4 text-green-700 dark:bg-green-600 dark:text-green-100 border rounded border-green-900/10 bg-green-50`
      )}
      role="alert"
    >
      <strong className="text-sm font-medium">
        {status === ResponseEnum.error
          ? "Error to send email"
          : "Email has been sended!"}
      </strong>
    </div>
  );
};
