function ClasicButton({
  backgroundColor,
  hoverBackgroundColor,
  borderColor,
  text,
  textColor,
  hoverTextColor,
  marginRight,
  marginLeft,
  handleOnclick,
}) {
  return (
    <button
      className={`text-xs bg-${backgroundColor}-500 border-2 border-${borderColor}-500/75 text-${textColor} font-bold py-2 px-4 rounded-lg hover:bg-${hoverBackgroundColor}-700 hover:text-${hoverTextColor} hover:border-white-500 ${
        marginRight ?? ""
      } ${marginLeft ?? ""}`}
      onClick={handleOnclick}
    >
      {text}
    </button>
  );
}

export default ClasicButton;
