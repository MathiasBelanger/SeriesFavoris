const ErrorMsg = ({ msg, success }) => {
  return (
    <div
      className={`auth-message ${success ? "auth-message--success" : "auth-message--error"}`}
    >
      <span className="auth-message-icon">!</span>
      <span>{msg}</span>
    </div>
  );
};
export default ErrorMsg;
