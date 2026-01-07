function displayContent()
{
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const lessonName = urlParams.get('name');
  console.log(lessonName);
  
  document.querySelector('p').textContent = lessonName;
}

document.addEventListener('DOMContentLoaded', (e) => {displayContent()})