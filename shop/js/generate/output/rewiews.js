function outRewiews() {
  const rewiewsContainer = document.querySelector('#mySwiperRewiews')
  let out = ''

  // Перебираем массив продуктов
  for (const key in rewiews) {
    const data = rewiews[key]
    out += `
        <swiper-slide class="review">
            <div class="d-flex  gap-3 "><img src=" ${data.image}" class="review-image">
                <div class="d-flex flex-column gap-2"> 
                    <div class="stars   ">     
                        <img src="/assets/img/png/icons/Star.png" alt="Star">    
                        <img src="/assets/img/png/icons/Star.png" alt="Star">     
                        <img src="/assets/img/png/icons/Star.png" alt="Star">    
                        <img src="/assets/img/png/icons/Star.png" alt="Star">    
                        <img src="/assets/img/png/icons/Star.png" alt="Star">     
                    </div>      
                    <h5 class="review-name"> ${data.name} </h5>
                </div>
            </div>
            <p class="review-text mt-1">${data.textRewiew} </p>
        </swiper-slide>
    `
  }

  document.querySelector('#mySwiperRewiews').innerHTML = out
}
