document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quoteForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const width = parseFloat(document.getElementById("width").value);
      const height = parseFloat(document.getElementById("height").value);
      const product = document.getElementById("productType").value;

      if (isNaN(width) || isNaN(height)) return;

      const area = (width * height) / 10000; // m²
      const pricePerSqM = 30; // change as needed
      const estimate = (area * pricePerSqM).toFixed(2);

      const result = document.getElementById("quoteResult");
      result.textContent = `Estimated price for ${product}: $${estimate}`;
      result.classList.remove("hidden");
    });
  }

  const thumbnails = document.querySelectorAll(".thumbnail");
  const modal = document.getElementById("modal");
  const zoomedImg = document.getElementById("zoomedImg");

  // Function to open modal with zoomed image
  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      zoomedImg.src = thumbnail.src;
      modal.style.display = "flex";
    });
  });

  // Function to close modal when clicking outside the image
  modal.addEventListener("click", (event) => {
    if (event.target !== zoomedImg) {
      modal.style.display = "none";
    }
  });
});
