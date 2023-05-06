var smile = document.getElementsByClassName("ph ph-smiley");
var sad = document.getElementsByClassName("ph-smiley-sad");
var trash = document.getElementsByClassName("ph-trash");

Array.from(smile).forEach(function(element) {
      element.addEventListener('click', function(){
        const front = this.parentNode.parentNode.childNodes[1].innerText
        const back = this.parentNode.parentNode.childNodes[3].innerText
        const smile = this.parentNode.parentNode.childNodes[5].innerText
        fetch('easy', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'front': front,
            'back': back,
            'smile':smile
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(sad).forEach(function(element) {
  element.addEventListener('click', function(){
    const front = this.parentNode.parentNode.childNodes[1].innerText 
    const back = this.parentNode.parentNode.childNodes[3].innerText 
    const sad = this.parentNode.parentNode.childNodes[9].innerText
    fetch('hard', { 
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'front': front,
        'back': back,
        'sad': sad
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log('running')
        const smile = this.parentNode.parentNode.childNodes[5].innerText
        const sad = this.parentNode.parentNode.childNodes[9].innerText
        const front = this.parentNode.parentNode.childNodes[1].innerText
        const back = this.parentNode.parentNode.childNodes[3].innerText
        fetch('myanki', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'front': front,
            'back': back,
            'smile': smile,
            'sad': sad
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
