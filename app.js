$(function() {
  // YOUR CODE HERE
  //Exercise 1
  $('#toggleButton').on('click', () => {
    $('#myParagraph').toggle()
  })

  //Exercise 2
  $('#colorButton').on('click', () => {
    $('#colorDiv').css({
      background: 'yellow'
    })
  })

  //Exercise 3
  $('#addClassButton').on('click', () => {
    $('#classDiv').addClass('new-classDiv')
  })

  $('#removeClassButton').on('click', () => {
    $('#classDiv').removeClass('new-classDiv')
  })

  //Exercise 4
  $('#fadeInButton').on('click', () => {
    $('#fadeDiv').fadeIn(3000)
  })

  $('#fadeOutButton').on('click', () => {
    $('#fadeDiv').fadeOut("slow")
  })

  //Exercise 5
  $('#slideUpButton').on('click', () => {
    $('#slideDiv').slideUp()
  })

  $('#slideDownButton').on('click', () => {
    $('#slideDiv').slideDown()
  })
})