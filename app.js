let btn = document.getElementById("btn");
let result = document.getElementById("result");
let num = document.getElementById("num");

btn.addEventListener("click", () => {
    if (Number(num.value) < 1 || Number(num.value) > 8) {
        result.innerHTML = "Please enter a number between 1 to 8";
        num.value = ""
    } else {
        count = 0
        while (num.value > count) {
            resultNumber = [];
            while (resultNumber.length < 6) {
                let randomNumber = Math.trunc(Math.random() * 90)
                if (resultNumber.includes(randomNumber)) { continue; }
                else { resultNumber.push(randomNumber) }
            }
            resultNumber7 = [];
            let randomNumber = Math.trunc(Math.random() * 90)
            if (resultNumber.includes(randomNumber)) { continue; }
            else { resultNumber7.push(randomNumber) }

            let randomNumber8 = Math.trunc(Math.random() * 90)
            resultNumber7.push(randomNumber8);
            count += 1
            result.innerHTML += resultNumber.sort(function (a, b) { return a - b }).join(" , ") + " | " + resultNumber7.join(" | ") + "<hr>"
        }
        num.value = ""
    }
    num.addEventListener("change", () => {
        result.innerHTML = ""
    })
})