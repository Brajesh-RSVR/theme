

function hexToRgb(hex: string): string | null {
  // Remove the '#' symbol if present
  hex = hex.replace('#', '');

  // Check if the hex value is valid
  const validHexRegex = /^[0-9A-Fa-f]{6}$/g;
  if (!validHexRegex.test(hex)) {
    return null;
  }

  // Parse the hex values for red, green, and blue
  const red = parseInt(hex.substring(0, 2), 16);
  const green = parseInt(hex.substring(2, 4), 16);
  const blue = parseInt(hex.substring(4, 6), 16);

  // Return the RGB format
  return `${red}, ${green}, ${blue}`;
}



