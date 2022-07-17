const btnSupplement = document.getElementById("btn-plus");

const supplementOutput = document.getElementById("single-supplement-output");

btnSupplement.addEventListener("click", function () {
  outputSupplement();
});

function outputSupplement() {
  const cabinSingleSupplement = Number(
    document.getElementById("cabin-price-supplement").value
  );
  const singleSupplement = Number(
    document.getElementById("single-supplement").value
  );
  const supplementResult = (cabinSingleSupplement / 100) * singleSupplement;
  const cabinSupplementResult = cabinSingleSupplement + supplementResult;
  return (supplementOutput.innerHTML = `<h2>Cabin price including ${singleSupplement}% single supplement is: ${cabinSupplementResult}</h2>`);
}

document.getElementById("btn").onclick = function () {
  const cabinPriceValue = Number(document.getElementById("cabin-price").value);
  const firstDiscountValue = Number(
    document.getElementById("first-discount").value
  );
  const secondDiscountValue = Number(
    document.getElementById("second-discount").value
  );
  const thirdDiscountValue = Number(
    document.getElementById("third-discount").value
  );

  const firstDiscountResult = (cabinPriceValue / 100) * firstDiscountValue;
  const cabinPriceDiscount = cabinPriceValue - firstDiscountResult;
  const secondDiscount = (cabinPriceDiscount / 100) * secondDiscountValue;
  const secondCabinPrice = cabinPriceDiscount - secondDiscount;
  const thirdDicount = (secondCabinPrice / 100) * thirdDiscountValue;
  const thirdCabinDiscount = secondCabinPrice - thirdDicount;

  document.getElementById(
    "first-discount-output"
  ).innerHTML = `<h2>Cabin price with ${firstDiscountValue}% discount is: ${cabinPriceDiscount}</h2>
    <h2>First discount is: ${firstDiscountResult}</h2>`;

  if (secondDiscountValue === 0) {
    return;
  } else {
    document.getElementById(
      "second-discount-output"
    ).innerHTML = `<h2>Cabin price is: ${secondCabinPrice}</h2>
        <h2>Second discount is: ${secondDiscount}</h2>`;
  }

  if (thirdDiscountValue === 0) {
    return;
  } else {
    document.getElementById(
      "third-discount-output"
    ).innerHTML = `<h2>Cabin price is: ${thirdCabinDiscount}</h2>
       <h2>Third discount is: ${thirdDicount}</h2>`;
  }
};
