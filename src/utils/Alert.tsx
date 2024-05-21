type AlertProps = {
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  msg: string;
};

export const Alert = ({ setError, msg }: AlertProps) => {
  const handleClose = () => {
    setError(false);
  };

  return (
    <div className="alert-container">
      <span className="alert">
        <button className="alert-close" onClick={handleClose}>
          &times;
        </button>
        <div className="alert-msg">{msg}</div>
      </span>
    </div>
  );
};
