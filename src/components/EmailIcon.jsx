import { useRef, useEffect } from "react";

import ClipboardJS from "clipboard";
import { Tooltip } from "react-tooltip";

import PropTypes from "prop-types";

import { AiOutlineMail } from "react-icons/ai";

const EmailIcon = ({ email, iconSize }) => {
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
    <>
      <span
        ref={emailIconRef}
        className="cursor-pointer"
        title="Click to copy email address"
      >
        <AiOutlineMail
          data-tooltip-id="email-tooltip"
          data-tooltip-content="Email copied"
          size={iconSize}
        />
      </span>
      <Tooltip
        id="email-tooltip"
        place="top"
        effect="solid"
        openOnClick="true"
      />
    </>
  );
};

EmailIcon.propTypes = {
  email: PropTypes.string.isRequired,
  iconSize: PropTypes.number.isRequired,
};

export default EmailIcon;
