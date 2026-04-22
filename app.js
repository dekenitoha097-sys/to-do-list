function showError(message, containerId = 'error-message') {
  const errorElement = document.getElementById(containerId);
  if (errorElement) {
    errorElement.textContent = message;
    errorElement.classList.add('show');
    setTimeout(() => {
      errorElement.classList.remove('show');
    }, 5000);
  }
}

function showSuccess(message, containerId = 'success-message') {
  const successElement = document.getElementById(containerId);
  if (successElement) {
    successElement.textContent = message;
    successElement.classList.add('show');
    setTimeout(() => {
      successElement.classList.remove('show');
    }, 5000);
  }
}

function registerUser(username, email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  if (users.find(u => u.email === email || u.username === username)) {
    return { success: false, message: 'Cet utilisateur ou email existe déjà' };
  }
  
  if (!username.trim() || !email.trim() || !password.trim()) {
    return { success: false, message: 'Tous les champs sont requis' };
  }
  
  users.push({ id: Date.now(), username, email, password });
  localStorage.setItem('users', JSON.stringify(users));
  
  return { success: true, message: 'Inscription réussie !' };
}

function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem('users')) || [];
  
  if (!email.trim() || !password.trim()) {
    return { success: false, message: 'Tous les champs sont requis' };
  }
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true, message: 'Connexion réussie' };
  } else {
    return { success: false, message: 'Email ou mot de passe incorrect' };
  }
}

function logoutUser() {
  localStorage.removeItem('currentUser');
}

function getCurrentUser() {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
}

function addTask(titre, description) {
  const currentUser = getCurrentUser();
  
  if (!currentUser) {
    return { success: false, message: 'Vous devez être connecté' };
  }
  
  if (!titre.trim() || !description.trim()) {
    return { success: false, message: 'Le titre et la description sont requis' };
  }
  
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  tasks.push({
    id: Date.now(),
    userId: currentUser.id,
    titre: titre.trim(),
    description: description.trim()
  });
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  return { success: true, message: 'Tâche ajoutée' };
}

function updateTask(taskId, titre, description) {
  const currentUser = getCurrentUser();
  
  if (!currentUser) {
    return { success: false, message: 'Vous devez être connecté' };
  }
  
  if (!titre.trim() || !description.trim()) {
    return { success: false, message: 'Le titre et la description sont requis' };
  }
  
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskIndex = tasks.findIndex(t => t.id == taskId && t.userId === currentUser.id);
  
  if (taskIndex === -1) {
    return { success: false, message: 'Tâche non trouvée' };
  }
  
  tasks[taskIndex].titre = titre.trim();
  tasks[taskIndex].description = description.trim();
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  return { success: true, message: 'Tâche modifiée' };
}

function deleteTask(taskId) {
  const currentUser = getCurrentUser();
  
  if (!currentUser) {
    return { success: false, message: 'Vous devez être connecté' };
  }
  
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const initialLength = tasks.length;
  
  tasks = tasks.filter(t => !(t.id == taskId && t.userId === currentUser.id));
  
  if (tasks.length === initialLength) {
    return { success: false, message: 'Tâche non trouvée' };
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  
  return { success: true, message: 'Tâche supprimée' };
}

function getUserTasks() {
  const currentUser = getCurrentUser();
  
  if (!currentUser) {
    return [];
  }
  
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return tasks.filter(t => t.userId === currentUser.id);
}

function getTaskById(taskId) {
  const currentUser = getCurrentUser();
  
  if (!currentUser) {
    return null;
  }
  
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return tasks.find(t => t.id == taskId && t.userId === currentUser.id);
}

function initializeDefaultData() {
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
  }
  if (!localStorage.getItem('tasks')) {
    localStorage.setItem('tasks', JSON.stringify([]));
  }
}

initializeDefaultData();
