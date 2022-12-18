// Remember to console log and check if your JS is connected properly

function init() {

  //! Elements
  // Progres bar
  const bar = document.getElementById('bar')
  // Buttons
  const btns = document.querySelectorAll('button')
  // Total span
  const span = document.querySelector('#fromTot')
  // const labels = document.querySelector('.label')

  const btnOne = document.getElementById('btn-one')  
  const btnFive = document.getElementById('btn-five')  
  const btnTen = document.getElementById('btn-ten')  

  //! Event
  btns.forEach(btn => btn.addEventListener('click', addDonation))

  //! Variables
  // Total donated
  let totalDonat = 0
  // Target donation
  let fromTarget = 100

  //! Execution
  function addDonation(event){
    console.log('donation function starts')   //add value of button to totalDonat
    
    // Increase total donated when buttons are clicked
    totalDonat = totalDonat + parseInt(event.target.dataset.val)   // add value of button

    // console.log(totalDonat)
    bar.value = (`${totalDonat}`)  // totalDonat in bar value
    fromTarget = 100 - totalDonat   //calculate the fromtarget
    console.log(fromTarget)
    //and put in spantext
    span.innerText = (`£${fromTarget}`)
    // labels.setText(`${totalDonat}`)


    // If functions to disable the buttons
    if (totalDonat > 99) {
      
      btnOne.disabled = true
      btnFive.disabled = true
      btnTen.disabled = true
      window.alert('Fundraising Campaign Complete')

    } else if ( totalDonat > 95) {
      btnFive.disabled = true
      btnTen.disabled = true
    } else if (totalDonat > 90) {
      btnTen.disabled = true
    }
  

    //* Audio

    //! Element
    const audio = document.querySelector('audio') // Audio Element
    const btns = document.querySelectorAll('button')

    //! Execution
    function playAudio(event){
      audio.src = `sounds/${event.target.dataset.val}.wav`
      audio.play()
    }
    

    //! Event
    btns.forEach(x => x.addEventListener('click', playAudio))

  }
}

window.addEventListener('DOMContentLoaded', init)
