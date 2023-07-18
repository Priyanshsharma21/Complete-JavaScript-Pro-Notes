function createCanvas() {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
  
    // Set font properties
    const fontSize = 12;
    const fontFamily = 'Arial';
    const fontColor = 'red';
  
    // Set canvas background color
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // Set font properties and write characters in the canvas
    context.font = `${fontSize}px ${fontFamily}`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillStyle = fontColor;
  
    const numRows = 40;
    const numCols = 20;
    const cellWidth = canvas.width / numCols;
    const cellHeight = canvas.height / numRows;
  
    // Loop through each cell and write characters in the center
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const character = String.fromCharCode(65 + (row + col) % 26);
        const x = col * cellWidth + cellWidth / 2;
        const y = row * cellHeight + cellHeight / 2;
        context.fillText(character, x, y);
      }
    }
  
    // Add click event listener to the download link
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.addEventListener('click', downloadPixelData);
  }
  
  function downloadPixelData() {
    const canvas = document.getElementById('myCanvas');
    const context = canvas.getContext('2d');
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let pixelData = '';
  
    const numRows = 40;
    const numCols = 20;
  
    // Iterate over the pixel data and convert to hex format
    for (let row = 0; row < numRows; row++) {
      let rowData = '';
      for (let col = 0; col < numCols; col++) {
        const pixelIndex = (row * numCols + col) * 4;
        const red = imageData[pixelIndex] || 0;
        const green = imageData[pixelIndex + 1] || 0;
        const blue = imageData[pixelIndex + 2] || 0;
        const hexColor = rgbToHex(red, green, blue);
        rowData += hexColor + ' ';
      }
      pixelData += rowData.trim() + '\n';
    }
  
    // Create a Blob with the pixel data and generate a download link
    const blob = new Blob([pixelData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const downloadLink = document.getElementById('downloadLink');
    downloadLink.href = url;
  }
  
  function rgbToHex(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }
  
  function componentToHex(c) {
    const hex = (c || 0).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }
  
  // Call the createCanvas function to initialize the canvas and set up the download functionality
  createCanvas();
  