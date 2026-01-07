async function displayContent() {
  const list = document.getElementById('lessons-list')
  const response = await fetch("data/ds-bai-hoc/lessons.json");
  const data = await response.json();
  console.log(data);

  data.forEach(lesson => {
    const newLesson = document.createElement('li');
    newLesson.class = 'lesson';
    const link = document.createElement('a');
    link.href = `pages.html?name=${lesson['name']}`;
    link.innerHTML = lesson['name'];
    newLesson.appendChild(link);
    list.appendChild(newLesson);
  });
}

document.addEventListener('DOMContentLoaded', (e) => {displayContent();})