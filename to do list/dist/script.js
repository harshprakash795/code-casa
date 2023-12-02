const inputNew = document.querySelector('.insert-input');
const buttonAdd = document.querySelector('.add-new');
const containerTasks = document.querySelector('.task-container');

buttonAdd.addEventListener('click', () => {
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = `
        <div class="flex justify-between items-center bg-white w-[70%] m-auto h-[50px] rounded-lg">
            <div class="p-[40px]">${inputNew.value}</div>
            <button class="p-[30px] delete-button">
                <i class="fa-solid fa-trash p-2 text-white bg-red-500 text-xl rounded-lg cursor-pointer"></i>
            </button>
        </div>
    `;
    containerTasks.appendChild(newTask);
    inputNew.value = '';

    const btnDeletes = document.querySelectorAll('.delete-button'); 
    btnDeletes.forEach(btn => {
        btn.addEventListener('click', (e) => {
            containerTasks.removeChild(e.target.closest('.task')); 
        });
    });
});