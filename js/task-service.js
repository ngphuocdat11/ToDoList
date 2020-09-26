function TodoService() {
  this.getListTask = function () {
    return axios({
      url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/todo",
      method: "GET",
    });
  };

  this.addTask = function (task) {
    return axios({
      url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/todo`,
      method: "POST",
      data: task,
    });
  };

  this.deleteTask = function (id) {
    return axios({
      url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/todo/${id}`,
      method: "DELETE",
    });
  };

  this.getTaskById = function (id) {
    return axios({
      url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/todo/${id}`,
      method: "GET",
    });
  };

  this.updateTask = function (task) {
    return axios({
      url: `https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/todo/${task.id}`,
      method: "PUT",
      data: task,
    });
  };
}
