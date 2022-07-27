import "./style.css"

const adviceCount = document.querySelector("#advice-count")
const textEl = document.querySelector(".text")
const iconBtn = document.querySelector(".icon-btn")

let adviceCountNumber = 0

const getData = async () => {
  const quote = await fetch("https://api.adviceslip.com/advice")
  const { slip } = await quote.json()

  const advice = slip.advice

  const paragraph = document.createElement("p")
  paragraph.classList.add(
    "text-[28px]",
    "text-Light_Cyan",
    "font-extrabold",
    "animate-fade-in"
  )
  paragraph.innerText = `${advice}`
  textEl.appendChild(paragraph)

  if (quote.status === 200) {
    adviceCountNumber++
    adviceCount.innerText = `#${adviceCountNumber}`
  }
}

iconBtn.addEventListener("click", () => {
  const paragraph = textEl.querySelector("p")
  paragraph.remove()
  getData()
})
window.onload = () => getData()
