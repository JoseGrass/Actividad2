// Configuración de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Configuración de Firebase (reemplaza con tus credenciales)
const firebaseConfig = {
    apiKey: "AIzaSyCuhjOhK_-PJIupYsWUS9lrbcktYM31lsw",
    authDomain: "actividad2-7d652.firebaseapp.com",
    projectId: "actividad2-7d652",
    storageBucket: "actividad2-7d652.firebasestorage.app",
    messagingSenderId: "766228565196",
    appId: "1:766228565196:web:382b4fc923a284e0e5c669",
    measurementId: "G-N85D542R3X"
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
