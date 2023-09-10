import { useRef, useEffect } from "react";
import ClipboardJS from "clipboard";
import PropTypes from "prop-types";

import { AiOutlineMail } from "react-icons/ai";

const EmailIcon = ({ email }) => {
  const emailIconRef = useRef(null);

  useEffect(() => {
    const clipboard = new ClipboardJS(emailIconRef.current, {
      text: () => email,
    });
    return () => {
      clipboard.destroy();
    };
  }, [email]);

  return (
    <span
      ref={emailIconRef}
      className="cursor-pointer"
      title="Click to copy email address"
    >
      <AiOutlineMail />
      <i className="fa fa-envelope"></i>
    </span>
  );
};

EmailIcon.propTypes = {
  email: PropTypes.string.isRequired,
};

export default EmailIcon;
