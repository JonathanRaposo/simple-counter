
const div = document.querySelector('.container');
const display = document.querySelector('.counter-preview');


// event listener 
div.addEventListener('click', counter);

let value = 0
function counter(e){


  const button = e.target.id;
  switch( button){
    case 'decrement-btn':
        value -= 1;
        break;

    case 'increment-btn':
        value +=1;
        break;

    case 'reset-btn':
        value = 0;
        break;

    default:
        value = 0;
        break
  }
  display.textContent = value;
       
}

