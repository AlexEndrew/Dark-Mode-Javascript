function changeMode() {
    changeClasses();        //aqui ele muda pra darkmode os textos
    changeText();          //chamando 2 funcoes p dentro da funcao principal
  }
  
  function changeClasses() {
    button.classList.toggle(darkModeClass);  //aqui ele muda pra darkmode as classes
    h1.classList.toggle(darkModeClass);     //se nao existir o darkmode no classlist ele add senao ele remove
    body.classList.toggle(darkModeClass);   //a class dark mode pode ser criada ao clicar no botao ou ela pode sumir ao reclicar
    footer.classList.toggle(darkModeClass);
  }
  
  function changeText() {
    const lightMode = 'Light Mode';   
    const darkMode = 'Dark Mode';   //criando funcoes pra facilitar ao inves de deixar em funcao de varias strings de msm nome
  
    if (body.classList.contains(darkModeClass)) {    //se a pag ta em dark mode ele muda o botao pra "light mode"
      button.innerHTML = lightMode;        //botaozinho vira light mode         
      h1.innerHTML = darkMode + ' ON';    //h1 fala que o dark mode ta on
      return;
    }
  
    button.innerHTML = darkMode;       //caso seja falso retorna a pag pro light mode
    h1.innerHTML = lightMode + ' ON';
  }
  
  const darkModeClass = 'dark-mode';
  const button = document.getElementById('mode-selector');    //selecionando esse elemento
  const h1 = document.getElementById('page-title');
  const body = document.getElementsByTagName('body')[0];   //tag pq ele nao tem id nem class
  const footer = document.getElementsByTagName('footer')[0];
  
  button.addEventListener('click', changeMode);  //adicionando o evento click ao elemento,  
  // criou uma funcao chamada change mode LA EM CIMA e chamou ela aqui