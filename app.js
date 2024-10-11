const partNames = document.getElementById("part-options");
const materialNames = document.getElementById("meterial-name");
const sheetThickness = document.getElementById("THICKNESS");
const sheetSize = document.getElementById("sheetsize");
const sheetWeight = document.getElementById("sheetweight");
const stripSize = document.getElementById("stripsize");
const streepWeight = document.getElementById("streepweight");
const heightBlank = document.getElementById("heightBlank");
const stripSheet = document.getElementById("stripsheet");
const blankSteep = document.getElementById("blanksteep");
const totalBlanksheet = document.getElementById("totalblank");
const grossWeight = document.querySelector("#grossWeight");
const rateperKgVal = document.getElementById("rateperKg");
const amtofGrossweight = document.getElementById("amtofGrossweight");
const netWeight = document.getElementById("netweight");
const scrapWeightinKgVal = document.getElementById("scrapWeightinKgVal");
const scrapRateperkg = document.getElementById("scrapRateperkg");
const totalAmtofScrap = document.getElementById("totalAmtofScrap");
const materialCostFinal = document.getElementById("materialCostFinal");
const shearingPerkgRate = document.getElementById("shearingPerkgRate");
const shearingAmt = document.getElementById("shearingAmt");
const tonageBlankingandPunching = document.getElementById(
  "tonageBlankingandPunching"
);
const rateBlankingandPunching = document.getElementById(
  "rateBlankingandPunching"
);
const amtBlankingandPunching = document.getElementById(
  "amtBlankingandPunching"
);
const tonageBending = document.getElementById("tonageBending");
const rateBending = document.getElementById("rateBending");
const amtBendindTon = document.querySelector("#amtBendindTon");
const amtTotalprocessingcost = document.getElementById(
  "amtTotalprocessingcost"
);
const rateRejection = document.getElementById("rateRejection");
const amtRejection = document.getElementById("amtRejection");
const rateInvantry = document.getElementById("rateInvantry");
const amtInvantry = document.getElementById("amtInvantry");
const amtGauging = document.getElementById("amtGauging");
const amtFinalinspaction = document.getElementById("amtFinalinspaction");
const amtInspaction = document.getElementById("amtInspaction");
const rateIccgrossrm = document.getElementById("rateIccgrossrm");
const amtIccgross = document.getElementById("amtIccgross");
const bopHandlingAmt = document.getElementById("bopHandlingAmt");
const rateDiemaintenance = document.getElementById("rateDiemaintenance");
const amtDiemaintence = document.getElementById("amtDiemaintence");
const rateOverheadProcess = document.getElementById("rateOverheadProcess");
const amtOverheadProcess = document.getElementById("amtOverheadProcess");
const tonagePackinginGunnybag = document.getElementById(
  "tonagePackinginGunnybag"
);
const ratepackinginGunnybag = document.getElementById("ratepackinginGunnybag");
const amtpackinginGunnybag = document.getElementById("amtpackinginGunnybag");
const rateForwarding = document.getElementById("rateForwarding");
const amtForwarding = document.getElementById("amtForwarding");
const rateProfit = document.getElementById("rateProfit");
const amtProfit = document.getElementById("amtProfit");
const amtTotalrateofperpees = document.getElementById("amtTotalrateofperpees");
let thickValue = 0;
let heightBlankValue = 0;
let stripSizeValue = 0;
let stripinsheetVal = 0;
let blankinSteepVal = 0;
let sheetWeightVal = 0;
let streepWeightOutput = 0;
let totalblankinSheetOutput = 0;
let grossweightTotalVal = 0;
let inputrateperkgVal = 0;
let netWeightVal = 0;
let scrapRateperKGVal = 0;
let shearingPerkgRateVal = 0;
let tonageBlankingandPunchingVal = 0;
let rateBlankingandPunchingVal = 0;
let tonageBendingVal = 0;
let shearingAmtValue = 0;
let amtBlankingandPunchingValue = 0;
let amtBendindTonValue = 0;
let rateBendingVal = 0;
let rateRejectionVal = 0;
let totalMaterialCostValue = 0;
let amtTotalprocessingcostValue = 0;
let amtofGrossweightValue = 0;
let rateInvantryVal = 0;
let amtRejectionValue = 0;
let amtInvantryValue = 0;
let amtGaugingVal = 0;
let amtFinalinspactionVal = 0;
let amtInspactionVal = 0;
let rateIccgrossrmVal = 0;
let amtIccgrossVal = 0;
let bopHandlingAmtVal = 0;
let rateDiemaintenanceVal = 0;
let amtDiemaintenceVal = 0;
let rateOverheadProcessVal = 0;
let amtOverheadProcessVal = 0;
let tonagePackinginGunnybagVal = 0;
let ratepackinginGunnybagVal = 0;
let amtpackinginGunnybagVal = 0;
let rateForwardingVal = 0;
let amtForwardingVal = 0;
let rateProfitVal = 0;
let amtProfitVal = 0;

partNames.addEventListener("change", (e) => {
  console.log(partNames.value);
});

function handleMaterialNames() {
  if (materialNames.value === "H.R.P.") {
  }
  if (materialNames.value === "CR") {
  }
  if (materialNames.value === "H.R.") {
  }
}

sheetThickness.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    thickValue = sheetThickness.value;
    sheetThickness.value = thickValue;
    // sheetThickness.disabled = true;
    sheetSize.innerHTML = `1250X2500X${thickValue}MM<br />= ${eval(
      1250 * 2500 * thickValue
    )}`;
    sheetWeightVal = eval((1250 * 2500 * thickValue * 7.85) / 1000000);
    sheetWeight.innerText = `${sheetWeightVal}`;
  }
});

stripSize.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    stripSizeValue = stripSize.value;
    stripSize.value = stripSizeValue;
    streepWeightOutput = eval(
      (stripSizeValue * 1250 * thickValue * 7.85) / 1000000
    );
    console.log(streepWeightOutput);
    // stripSize.disabled = true;
    streepWeight.innerText = `${Number(streepWeightOutput).toFixed(3)}`;
    blankinSteepVal = Math.floor(eval(2500 / stripSizeValue));
    stripSheet.innerHTML = `2500/${stripSizeValue} <br />= ${blankinSteepVal}`;
  }
});

heightBlank.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    heightBlankValue = heightBlank.value;
    heightBlank.value = heightBlankValue;
    stripinsheetVal = Math.floor(eval(1250 / heightBlankValue));
    blankSteep.innerHTML = `1250/${heightBlankValue} <br />= ${stripinsheetVal}`;
    totalblankinSheetOutput = stripinsheetVal * blankinSteepVal;
    totalBlanksheet.innerHTML = `${stripinsheetVal}X${blankinSteepVal} <br />= ${totalblankinSheetOutput}`;
    grossweightTotalVal = sheetWeightVal / totalblankinSheetOutput;
    grossWeight.innerText = grossweightTotalVal;
  }
  // console.log(streepWeightOutput, blankinSteepVal);
});

rateperKgVal.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    inputrateperkgVal = rateperKgVal.value;
    rateperKgVal.value = inputrateperkgVal;
    amtofGrossweightValue = inputrateperkgVal * grossweightTotalVal;
    amtofGrossweight.innerText = inputrateperkgVal * grossweightTotalVal;
    findamtTotalrateofperpees();
  }
});

netWeight.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    netWeightVal = netWeight.value;
    netWeight.value = netWeightVal;
    scrapWeightinKgVal.innerText = grossweightTotalVal - netWeightVal;
    findamtTotalrateofperpees();
  }
});

scrapRateperkg.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    scrapRateperKGVal = scrapRateperkg.value;
    scrapRateperkg.value = scrapRateperKGVal;
    totalAmtofScrap.innerText =
      (grossweightTotalVal - netWeightVal) * scrapRateperKGVal;
  }
  totalMaterialCostValue =
    inputrateperkgVal * grossweightTotalVal -
    (grossweightTotalVal - netWeightVal) * scrapRateperKGVal;
  materialCostFinal.innerText =
    inputrateperkgVal * grossweightTotalVal -
    (grossweightTotalVal - netWeightVal) * scrapRateperKGVal;
  findamtTotalrateofperpees();
});

shearingPerkgRate.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    shearingPerkgRateVal = shearingPerkgRate.value;
    shearingPerkgRate.value = shearingPerkgRateVal + " kg";
    shearingAmtValue = grossweightTotalVal * shearingPerkgRateVal;
    shearingAmt.innerText = grossweightTotalVal * shearingPerkgRateVal;
    getTotalvalofProcessingcost();
    findamtTotalrateofperpees();
  }
});

tonageBlankingandPunching.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    tonageBlankingandPunchingVal = tonageBlankingandPunching.value;
    tonageBlankingandPunching.value = tonageBlankingandPunchingVal;
    findamtTotalrateofperpees();
  }
});

rateBlankingandPunching.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    rateBlankingandPunchingVal = rateBlankingandPunching.value;
    rateBlankingandPunching.value = rateBlankingandPunchingVal + " %";
    amtBlankingandPunchingValue = eval(
      (tonageBlankingandPunchingVal * rateBlankingandPunchingVal) / 10000
    );
    amtBlankingandPunching.innerText = amtBlankingandPunchingValue;
    getTotalvalofProcessingcost();
    findamtTotalrateofperpees();
  }
});

tonageBending.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    tonageBendingVal = tonageBending.value;
    tonageBending.value = tonageBendingVal;
    findamtTotalrateofperpees();
  }
});

rateBending.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    rateBendingVal = rateBending.value;
    rateBending.value = rateBendingVal + " %";
    amtBendindTonValue = eval((tonageBendingVal * rateBendingVal) / 10000);
    amtBendindTon.innerText = amtBendindTonValue;
    getTotalvalofProcessingcost();
    findamtTotalrateofperpees();
  }
});

function getTotalvalofProcessingcost() {
  amtTotalprocessingcostValue =
    shearingAmtValue + amtBlankingandPunchingValue + amtBendindTonValue;
  amtTotalprocessingcost.innerText =
    shearingAmtValue + amtBlankingandPunchingValue + amtBendindTonValue;
  findamtTotalrateofperpees();
}

rateRejection.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    rateRejectionVal = rateRejection.value;
    rateRejection.value = rateRejectionVal + " %";
    amtRejectionValue =
      ((totalMaterialCostValue + amtTotalprocessingcostValue) *
        rateRejectionVal) /
      100;
    amtRejection.innerText =
      ((totalMaterialCostValue + amtTotalprocessingcostValue) *
        rateRejectionVal) /
      100;
    findamtTotalrateofperpees();
  }
});

rateInvantry.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    rateInvantryVal = rateInvantry.value;
    rateInvantry.value = rateInvantryVal + " %";
    amtInvantryValue = (amtofGrossweightValue * rateInvantryVal) / 100;
    amtInvantry.innerText = (amtofGrossweightValue * rateInvantryVal) / 100;
    console.log(amtofGrossweightValue, rateInvantryVal);
    findamtTotalrateofperpees();
  }
});

amtGauging.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    amtGaugingVal = Number(amtGauging.value);
    amtGauging.value = amtGaugingVal;
    findamtTotalrateofperpees();
  }
});

amtFinalinspaction.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    amtFinalinspactionVal = Number(amtFinalinspaction.value);
    amtFinalinspaction.value = amtFinalinspactionVal;
    findamtTotalrateofperpees();
  }
});

amtInspaction.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    amtInspactionVal = Number(amtInspaction.value);
    amtInspaction.value = amtInspactionVal;
    findamtTotalrateofperpees();
  }
});

rateIccgrossrm.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    rateIccgrossrmVal = rateIccgrossrm.value;
    rateIccgrossrm.value = rateIccgrossrmVal;
    amtIccgrossVal = (amtofGrossweightValue * rateIccgrossrmVal) / 100;
    amtIccgross.innerText = amtIccgrossVal;
    findamtTotalrateofperpees();
  }
});

bopHandlingAmt.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    bopHandlingAmtVal = Number(bopHandlingAmt.value);
    bopHandlingAmt.value = bopHandlingAmtVal;
    findamtTotalrateofperpees();
  }
});

rateDiemaintenance.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    rateDiemaintenanceVal = rateDiemaintenance.value;
    rateDiemaintenance.value = rateDiemaintenanceVal + " %";
    amtDiemaintenceVal = (amtofGrossweightValue * rateDiemaintenanceVal) / 100;
    amtDiemaintence.innerText = amtDiemaintenceVal;
    findamtTotalrateofperpees();
  }
});

rateOverheadProcess.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    rateOverheadProcessVal = rateOverheadProcess.value;
    rateOverheadProcess.value = rateOverheadProcessVal + " %";
    amtOverheadProcessVal =
      (amtTotalprocessingcostValue * rateOverheadProcessVal) / 100;
    amtOverheadProcess.innerText = amtOverheadProcessVal;
    findamtTotalrateofperpees();
  }
});

tonagePackinginGunnybag.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    tonagePackinginGunnybagVal = tonagePackinginGunnybag.value;
    tonagePackinginGunnybag.value = tonagePackinginGunnybagVal + " Pic";
    findamtTotalrateofperpees();
  }
});

ratepackinginGunnybag.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    ratepackinginGunnybagVal = ratepackinginGunnybag.value;
    ratepackinginGunnybag.value = ratepackinginGunnybagVal;
    console.log(ratepackinginGunnybagVal);
    amtpackinginGunnybagVal =
      tonagePackinginGunnybagVal / ratepackinginGunnybagVal;
    console.log(amtpackinginGunnybagVal);
    amtpackinginGunnybag.innerText = amtpackinginGunnybagVal;
    findamtTotalrateofperpees();
    // console.log(amtpackinginGunnybagVal);
  }
});

rateForwarding.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    rateForwardingVal = rateForwarding.value;
    rateForwarding.value = rateForwardingVal;
    amtForwardingVal = grossweightTotalVal * rateForwardingVal;
    amtForwarding.innerText = amtForwardingVal;
    findamtTotalrateofperpees();
  }
});

rateProfit.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    rateProfitVal = rateProfit.value;
    rateProfit.value = rateProfitVal;
    amtProfitVal =
      ((totalMaterialCostValue + amtTotalprocessingcostValue) * rateProfitVal) /
      100;
    amtProfit.innerText = amtProfitVal;
    findamtTotalrateofperpees();
  }
});

function findamtTotalrateofperpees() {
  amtTotalrateofperpees.innerText = (
    totalMaterialCostValue +
    amtTotalprocessingcostValue +
    amtRejectionValue +
    amtInvantryValue +
    amtGaugingVal +
    amtFinalinspactionVal +
    amtInspactionVal +
    amtIccgrossVal +
    bopHandlingAmtVal +
    amtDiemaintenceVal +
    amtOverheadProcessVal +
    amtpackinginGunnybagVal +
    amtForwardingVal +
    amtProfitVal
  ).toFixed(2);
}
