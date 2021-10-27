let selected = null

window.onload = () => {
    const mainDom = document.querySelector("main")

    mainDom.innerHTML = introHtml

    const anchorDom = document.querySelector(".intro-story")
    anchorDom.addEventListener("click", () => handleMainDom(mainDom))
}

const handleMainDom = (mainDom) => {
    mainDom.innerHTML = questionWrapHtml

    const leftThumbDom = document.querySelector(".left-thumb")
    const rightThumbDom = document.querySelector(".right-thumb")
    const nextButton = document.querySelector(".next-btn")

    leftThumbDom.addEventListener("change", () => {
        selected = "왼쪽"
        rightThumbDom.checked = false
        leftThumbDom.checked = true
    })
    rightThumbDom.addEventListener("change", () => {
        selected = "오른쪽"

        leftThumbDom.checked = false
        rightThumbDom.checked = true
    })

    nextButton.addEventListener("click", () => {
        console.log(selected, "선택된 것")
    })
}

const introHtml = `<div id="intro" class="intro-wrap">
<div class="intro">
    <a href="#" class="intro-story" v-on:click="start"
        >테스트를 시작할까요?</a
    >
</div>
</div>`

const questionWrapHtml = `            <div id="main"> 
<div class="title-wrap">
     <h2 class="title">성격테스트</h2>
 </div>

 <div class="question-wrap">
     <h3 class="question">
         깍지를 꼈을때 어느쪽 엄지가 위로 올라오나요?
     </h3>
 </div>

 <div class="answer-wrap">
     <h3 class="answer">
         <p><input type="checkbox" class="left-thumb"/>왼쪽 엄지</p>
         <br />
         <p><input type="checkbox" class="right-thumb"/>오른쪽 엄지</p>
     </h3>
 </div>
 <div class="bottom">
     <div class="controller-wrap">
         <button class="prev-btn" v-on:click="prev">이전</button>
         <button class="next-btn" v-on:click="next">다음</button>
     </div>
 </div>
</div>`

const leftResultHtml = ` <div id="result" class="result-wrap">
<div class="result">당신은 좌뇌형입니다!</div>
</div>`

const rightResultHtml = ` <div id="result" class="result-wrap">
<div class="result">당신은 우뇌형입니다!</div>
</div>`