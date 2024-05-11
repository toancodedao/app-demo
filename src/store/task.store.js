import {action, makeAutoObservable, runInAction} from 'mobx';

const data = [
  {id: 1, name: 'Onboarding illustration', isCheck: false},
  {id: 2, name: 'Wireframe ', isCheck: false},
  {id: 3, name: '2 Screen UI design ', isCheck: false},
  {id: 4, name: 'Task Management ', isCheck: false},
];

class TaskStore {
  task = data;

  constructor() {
    makeAutoObservable(this, {
      updateCheckTask: action.bound,
      deleteTask: action.bound,
      refreshTask: action.bound,
    });
  }

  updateCheckTask(id) {
    const updatedTasks = this.task.map(taskItem => {
      if (taskItem.id === id) {
        return {...taskItem, isCheck: !taskItem?.isCheck};
      } else {
        return taskItem;
      }
    });
    runInAction(() => {
      this.task = updatedTasks;
    });
  }

  deleteTask(id) {
    let listTask = [...this.task];
    const index = listTask.findIndex(i => i.id === id);
    if (index > -1) {
      listTask.splice(index, 1);
    }
    runInAction(() => {
      this.task = listTask;
    });
  }

  refreshTask() {
    runInAction(() => {
      this.task = data;
    });
  }
}

export default new TaskStore();
