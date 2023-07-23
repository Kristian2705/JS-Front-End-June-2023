function solve() {
      //[firstAns, firstWrong, secondWrong, secondAns, thirdAns, thirdWrong]
    const pars = Array.from(document.querySelectorAll('p'));
    let correctAnswers = 0;
    let currSectionNum = 2;
    for (let i = 0; i < pars.length; i += 2) {
      let ans = '';
      let wrong = '';
      if(i === 2){
        ans = pars[i + 1];
        wrong = pars[i];
      }
      else{
        ans = pars[i];
        wrong = pars[i + 1];
      }

      console.log(ans);
      console.log(wrong);

      ans.addEventListener('click', () => {
        let currSection = document.querySelector(`section:nth-child(${currSectionNum++})`);
        currSection.style.display = 'none';
        correctAnswers++;
        if(currSectionNum === 5){
          const scoreScreen = document.querySelector('#results');
          scoreScreen.style.display = 'block';
          if(correctAnswers === 3){
            document.querySelector('#results h1').textContent = 'You are recognized as top JavaScript fan!';
          }
          else{
            document.querySelector('#results h1').textContent = `You have ${correctAnswers} right answers`;
          }
        }
        else{
          let nextSection = document.querySelector(`section:nth-child(${currSectionNum})`);
          nextSection.style.display = 'block';
        }
      });

      wrong.addEventListener('click', () => {
        let currSection = document.querySelector(`section:nth-child(${currSectionNum++})`);
        currSection.style.display = 'none';
        if(currSectionNum === 5){
          const scoreScreen = document.querySelector('#results');
          scoreScreen.style.display = 'block';
          if(correctAnswers === 3){
            document.querySelector('#results h1').textContent = 'You are recognized as top JavaScript fan!';
          }
          else{
            document.querySelector('#results h1').textContent = `You have ${correctAnswers} right answers`;
          }
        }
        else{
          let nextSection = document.querySelector(`section:nth-child(${currSectionNum})`);
          nextSection.style.display = 'block';
        }
      })
    }
}
