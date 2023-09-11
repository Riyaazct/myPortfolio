// Import necessary dependencies from React and other libraries
import { useRef, useEffect } from "react";
import ClipboardJS from "clipboard";
import { Tooltip } from "react-tooltip";
import PropTypes from "prop-types";
import { AiOutlineMail } from "react-icons/ai";

// Define a functional component called EmailIcon that accepts email and iconSize as props
const EmailIcon = ({ email, iconSize }) => {
  // Create a reference to a DOM element using React's useRef hook
  const emailIconRef = useRef(null);

  // Use the useEffect hook to perform actions when the component mounts or when 'email' prop changes
  useEffect(() => {
    // Initialize the ClipboardJS library with the emailIconRef element
    const clipboard = new ClipboardJS(emailIconRef.current, {
      // Set the copied text to the email prop
      text: () => email,
    });

    // Clean up and destroy the clipboard instance when the component unmounts or when 'email' prop changes
    return () => {
      clipboard.destroy();
    };
  }, [email]);

  // Render the component's UI
  return (
    <>
      {/* Render an email icon as a clickable element */}
      <span
        ref={emailIconRef}
        className="cursor-pointer hover:opacity-80"
        title="Click to copy email address"
      >
        {/* Render the email icon using the AiOutlineMail component */}
        <AiOutlineMail
          data-tooltip-id="email-tooltip"
          data-tooltip-content="Email copied"
          data-tooltip-delay-hide="1500"
          size={iconSize}
        />
      </span>
      {/* Render a tooltip component with the ID 'email-tooltip' */}
      <Tooltip
        id="email-tooltip"
        place="top"
        effect="solid"
        openOnClick="true" // This should likely be openOnClick={true} to indicate it's a boolean value
      />
    </>
  );
};

// Define prop types for EmailIcon component
EmailIcon.propTypes = {
  email: PropTypes.string.isRequired, // 'email' prop should be a required string
  iconSize: PropTypes.number.isRequired, // 'iconSize' prop should be a required number
};

// Export the EmailIcon component as the default export of this module
export default EmailIcon;
