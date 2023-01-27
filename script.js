const ratings = document.querySelectorAll('.btn')
const selection = document.getElementById('rating')
const submitBtn = document.getElementById('submit-btn')
const mainContainer = document.getElementById('main-container')
const thankyouContainer = document.getElementById('thankyou-container')

submitBtn.addEventListener('click', function() {
  mainContainer.style.display = 'none'
  thankyouContainer.classList.remove('hidden')
})

ratings.forEach((rating) => {
  rating.addEventListener('click', function() {
    selection.textContent = rating.textContent
  })
}) 