

window.addEventListener('load', () => {
  
  const form = document.querySelector('#new-task-form')
  const input = document.querySelector('#new-task-input')
  const list_elements = document.querySelector('#tasks')
  const getTemplate = document.getElementById('task-template')


  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;
    if (!task) {
      const renderTemplate = document.importNode(getTemplate.content, true)
      document.getElementById('tasks').appendChild(renderTemplate)
      return;  
    }

    const task_el = document.createElement('div');
    task_el.classList.add('task');
    task_el.className += " input-group";

    const task_content_el = document.createElement("div");
    task_content_el.classList.add('content');
    task_content_el.className += " container col w-50 p-2 border"

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.className += " form-control-plaintext p-3 font-weight-bold";
    task_input_el.type = 'text'
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly')
    
    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    const task_edit_el = document.createElement("button");
    task_edit_el.classList.add('edit');
    task_edit_el.className += " btn btn-outline-primary"
    task_edit_el.innerHTML = 'Edit';

    const task_complete_el = document.createElement('button');
    task_complete_el.classList.add('complete');
    task_complete_el.className += " btn btn-outline-success";
    task_complete_el.innerHTML = 'Done';

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_complete_el);

    task_el.appendChild(task_actions_el);

    
    list_elements.appendChild(task_el)

    input.value = "";    

    task_edit_el.addEventListener('click', () => {
      if(task_edit_el.innerText.toLowerCase() == 'edit') {
        task_input_el.removeAttribute('readonly');
        task_input_el.focus();
        task_edit_el.innerText = "Save";
      } else {
        task_input_el.setAttribute('readonly', 'readonly');
        task_edit_el.innerText = 'Edit'
      }
      
    });

    task_complete_el.addEventListener('click', () => {
      list_elements.removeChild(task_el);
      
    });

  });

});