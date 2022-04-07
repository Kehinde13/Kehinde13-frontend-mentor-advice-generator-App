const adviceBtn = document.getElementById("dice");
const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("adviceText");

const fetchAdvice = async () => {
 
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json()
        const {slip} = data
        adviceId.innerHTML = `#${slip.id}`
        adviceText.innerHTML = slip.advice
};

fetchAdvice()

adviceBtn.addEventListener("click", fetchAdvice);