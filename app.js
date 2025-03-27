// Configuración de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Configuración de Firebase (reemplaza con tus credenciales)
const firebaseConfig = {
    apiKey: "TU_API_KEY",
    authDomain: "TU_AUTH_DOMAIN",
    projectId: "TU_PROJECT_ID",
    storageBucket: "TU_STORAGE_BUCKET",
    messagingSenderId: "TU_MESSAGING_SENDER_ID",
    appId: "TU_APP_ID",
    measurementId: "TU_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Elementos del DOM
const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title');
const taskDescription = document.getElementById('task-description');
const taskList = document.getElementById('task-list');

// Evento para agregar tarea
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = taskTitle.value;
    const description = taskDescription.value;
    
    if (title && description) {
        await addTask(title, description);
        taskTitle.value = '';
        taskDescription.value = '';
        loadTasks();
    }
});

// Función para agregar tarea a Firestore
async function addTask(title, description) {
    try {
        await addDoc(collection(db, 'tareas'), {
            titulo: title,
            descripcion: description,
            fecha: new Date().toISOString()
        });
        console.log("Tarea agregada!");
    } catch (e) {
        console.error("Error al agregar tarea: ", e);
    }
}

// Función para cargar las tareas desde Firestore
async function loadTasks() {
    try {
        const querySnapshot = await getDocs(collection(db, 'tareas'));
        taskList.innerHTML = '';
        querySnapshot.forEach(doc => {
            const task = doc.data();
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `<h3>${task.titulo}</h3><p>${task.descripcion}</p><small>${task.fecha}</small>`;
            taskList.appendChild(taskItem);
        });
    } catch (e) {
        console.error("Error al cargar las tareas: ", e);
    }
}

// Cargar las tareas cuando se carga la página
loadTasks();
