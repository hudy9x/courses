export const useEnterEscButtonsHook = ({ handleCancel, handleConfirm }) => {
  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        handleConfirm();
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleConfirm]);

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Escape") {
        handleCancel();
        event.preventDefault();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [handleCancel]);
};
