export const shuffleArray = (array: any[]) => {
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * array.length);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }  
  }