function calculate() {
  const totalAmount = document.querySelector("#total-amount");
  const principalInput = document.querySelector("#principle");
  const rateInput = document.querySelector("#rate");
  const timeInput = document.querySelector("#time");
  let principal = Number(principalInput.value);
  let rate = Number(rateInput.value / 100);
  let time = Number(timeInput.value);
  if(principal<0){
    principal=0
  }
  if(time<0){
    time=0
  }
  if(rate<0){
    rate=0
  }
  const result = principal * Math.pow(1 + rate / 1, 1 * time);
  totalAmount.textContent = result.toLocaleString(undefined, {
    style: "currency",
    currency: "usd",
  });
}
