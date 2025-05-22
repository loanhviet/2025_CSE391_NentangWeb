$(function() {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  const $input   = $('#new-task');
  const $addBtn  = $('#add-task-btn');
  const $list    = $('#task-list');
  const $filters = $('.filters button');

  function save() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  function load() {
    tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  function render() {
    const filter = $('.filters button.active').data('filter');
    $list.empty();
    tasks
      .filter(t =>
        filter === 'all' ||
        (filter === 'done'    && t.isDone) ||
        (filter === 'pending' && !t.isDone)
      )
      .forEach(t => {
        const $li = $(`
          <li data-id="${t.id}" class="${t.isDone ? 'done' : ''}">
            <span class="text">${t.text}</span>
            <button class="delete">Xóa</button>
          </li>
        `);
        $list.append($li);
      });
  }

  $addBtn.on('click', () => {
    const txt = $input.val().trim();
    if (!txt) { alert('Nhập công việc!'); return; }
    tasks.push({ id: Date.now(), text: txt, isDone: false });
    $input.val('');
    save(); render();
  });

  $list.on('click', function(e) {
    const $t = $(e.target);
    const id = Number($t.closest('li').data('id'));
    if ($t.hasClass('delete')) {
      tasks = tasks.filter(t => t.id !== id);
    }
    if ($t.hasClass('text')) {
      tasks = tasks.map(t => t.id === id ? { ...t, isDone: !t.isDone } : t);
    }
    save(); render();
  });

  $filters.on('click', function() {
    $filters.removeClass('active');
    $(this).addClass('active');
    render();
  });

  // Init
  render();
});
