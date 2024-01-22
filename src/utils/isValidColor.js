export const isValidColor = (colorName) => {
  const colorChecker = document.createElement('div');
  colorChecker.style.color = 'transparent';
  document.body.appendChild(colorChecker);
  colorChecker.style.color = colorName;

  const isColorValid = colorChecker.style.color !== 'transparent';
  document.body.removeChild(colorChecker);

  return isColorValid;
};
