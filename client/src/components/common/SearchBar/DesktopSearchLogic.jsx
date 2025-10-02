import { useState, useEffect } from "react";
import DesktopSearchUI from "./DesktopSearchUI";

function DesktopSearchLogic({ value="", onChange, placeholder = "Search...", hidden }) {
  const [isFocused, setIsFocused] = useState(false);
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalValue(newValue);
    onChange(newValue);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleClear = () => {
    setLocalValue("");
    onChange("");
  };

  return (
    <DesktopSearchUI
      value={localValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClear={handleClear}
      isFocused={isFocused}
      placeholder={placeholder}
      showClear={localValue.length > 0}
      hidden={hidden}
    />
  );
}

export default DesktopSearchLogic;
