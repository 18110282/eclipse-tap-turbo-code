javascript: (function () {
  let number = 2000;
  let extraClicks = 100;
  let xMin = 400,
    xMax = 850,
    yMin = 400,
    yMax = 500;
  const getRandomInRange = (min, max) => Math.random() * (max - min) + min;
  const performClicks = () => {
    const element = document.elementFromPoint(
      (xMin + xMax) / 2,
      (yMin + yMax) / 2
    );
    if (element) {
      let count = 0;
      const click = () => {
        const x = Math.round(getRandomInRange(xMin, xMax));
        const y = Math.round(getRandomInRange(yMin, yMax));
        element.dispatchEvent(
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            clientX: x,
            clientY: y,
          })
        );
        count++;
        console.log(`Clicked ${count} times at (${x}, ${y})`);
        if (count < number + extraClicks) {
          setTimeout(click, Math.random() * 100 + 200);
        } else {
          console.log(
            `Completed ${number + extraClicks} clicks. Reloading page...`
          );
          setTimeout(() => {
            location.reload();
          }, 10000);
        }
      };
      click();
    } else {
      console.error("Element not found at the specified coordinates.");
    }
  };
  performClicks();
})();
