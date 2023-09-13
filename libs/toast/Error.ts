import toast from "react-hot-toast";

interface ErrorToastProps {
  /**
   *  form 등에서 errors 객체의 텍스트를 전달
   * @example
   * ```typescript
   * errors.email?.message || errors.password?.message
   * ```
   * */
  errorMessage?: string;
  /**
   * 기본값은 "잠시 후 다시 시도해 주세요."이지만 다른 값으로 바꾸고 싶을 때 텍스트
   */
  defaultMessage?: string;
}

const ErrorToast = ({
  errorMessage,
  defaultMessage = "잠시 후 다시 시도해 주세요.",
}: ErrorToastProps) => {
  return toast.error(errorMessage || defaultMessage);
};

export default ErrorToast;
