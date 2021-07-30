let ldSurvey = document.getElementById('ld-survey')

ldSurvey.addEventListener('submit', e => {
    event.preventDefault
    let ldFormData = new FormData(event.target)
    let firstName = ldFormData.get('fName')
    let messageToUser = `<h2>Hey there, ${firstName}!<br>
    This is a student project and not a real survey form.<br>
    However...<br>
    If you are interested in learning how to lucid dream I recommend watching Michael Raduga's conscious dreaming instructional videos. They were recorded in Russia and translated into english.</h2>
   <a class='raduga' href="https://obe4u.com" target='_blank'>obe4u.com</a>
    <h2>(Don't let Raduga's initial woo-woo syntax throw you off. He delivers pragmatic, field-tested LD induction techniques.)</h2>`
    let mainContent = document.getElementById('main-content')
    mainContent.classList.add('messageToUser')
    mainContent.innerHTML = messageToUser
})




