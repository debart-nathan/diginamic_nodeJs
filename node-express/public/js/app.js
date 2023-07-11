if (location.pathname == '/todos') {
  fetch('/api/todos')
    .then(res => res.json())
    .then(todos => {
      document.querySelector('.todos').innerHTML = `
        ${todos.map(t => `
          <div id="${t.id}" class="todo ${t.cat}" value=${t.status} style="text-decoration: ${t.status?"line-through":"none"};">
            <p>${t.txt}</p>
          </div>
        `).join('')}
      `;
    });

  document.querySelector(".todos").addEventListener("click", (ev) => {
    let target = ev.target;
    if (target.nodeName.toLowerCase() != "div") {
      target = target.parentElement;
    }

    if (target.classList.contains("todo")) {
      let data = {
        id:target.getAttribute('id'),
        status: target.getAttribute("value")
      }
      data.status = ! eval(data.status);
      target.setAttribute("value", data.status)
      if (data.status) {
        target.style["text-decoration"] = "line-through";
      } else {
        target.style["text-decoration"] = "none";
      }
      
      fetch("/todos", {
        method: "put",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
    }
  });
}

if (location.pathname == '/todos/create') {
  const form = document.querySelector('form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(location.href, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        txt: form.txt.value,
        cat: form.cat.value
      })
    }).then(() => location.href = '/todos');
  });
}