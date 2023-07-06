const { Task } = require("../models");

const createTask = async (req, res) => {
  const { title, body, status } = req.body;
  const newTask = await Task.create({
    title,
    body,
    status,
  });
  res.status(201).send(newTask);
};

const getAllTask = async (req, res) => {
  const taskList = await Task.findAll();
  res.status(200).send(taskList);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Trip.destroy({
    where: {
      id,
    },
  });
  res.send(`Đã xóa task có id là  : ${id} `);
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, body, status } = req.body;
  await Trip.update(
    { title, body, status },
    {
      where: {
        id,
      },
    }
  );
  res.send(`Đã update thành công task có id là : ${id} `);
};

module.exports = {
  createTask,
  getAllTask,
  deleteTask,
  updateTask,
};
