const dog = document.querySelector(".elDog")
const frame = document.querySelector(".elFrame")

console.log(dog.getBoundingClientRect())



frame.addEventListener('click', function(ev) {

    let cooX = ev.clientX;
    let cooY = ev.clientY;

    const xstart = 350;
    const ystart = 350;
    
    let start = Date.now()
    let timer = setInterval(function() {
          
        let timePassed = Date.now() - start;   
        if (timePassed >= 1500) {
      
          clearInterval(timer);
      
          return;
      
        }
        draw(timePassed);    
      }, 24);

    console.log(cooX, cooY)

    if ((cooX < 401)&&(cooY < 401)) {

        console.log("вліво вгору")

        function draw(timePassed) {
        
            dog.style.left = xstart + timePassed / -4.28 + 'px';
            dog.style.top = ystart + timePassed / -4.28 + 'px'}

     } else 

         if ((cooX < 401)&&(cooY > 400)) {

             console.log("вліво вниз")

              function draw(timePassed) {
                
                  dog.style.left = xstart + timePassed / -4.28 + 'px';
                 dog.style.top = ystart + timePassed / 4.28 + 'px'}
          } else

              if ((cooX > 400)&&(cooY > 400)) {

                   console.log("вправо вниз")

                function draw(timePassed) {
                
                     dog.style.left = xstart + timePassed / 4.28 + 'px';
                     dog.style.top = ystart + timePassed / 4.28 + 'px'}
              } else

                  console.log("вправо вгору")

                 function draw(timePassed) {
                
                      dog.style.left = xstart + timePassed / 4.28 + 'px';
                      dog.style.top = ystart + timePassed / -4.28 + 'px'}
        })

