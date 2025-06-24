export const toggleDisplay = () => {
    const displayElement = document.getElementById('display');
    if (displayElement) {
      displayElement.classList.toggle('display-visible');
    }
  };