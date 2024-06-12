import html2canvas from "html2canvas";

export function takeShot(elementID, name) {
  let div = document.getElementById(elementID);
  html2canvas(div).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = imgData;
    link.download = `${name}.png`;
    link.click();
  });
}
