// Configuración de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

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
const taskStatus = document.getElementById('task-status');
const taskList = document.getElementById('task-list');

// Evento para agregar tarea
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = taskTitle.value;
    const description = taskDescription.value;
    const status = taskStatus.value;
    
    if (title && description && status) {
        await addTask(title, description, status);
        taskTitle.value = '';
        taskDescription.value = '';
        taskStatus.value = 'Pendiente';  // Resetear el estado al agregar nueva tarea
        loadTasks();
    }
});

// Función para agregar tarea a Firestore
async function addTask(title, description, status) {
    try {
        await addDoc(collection(db, 'tareas'), {
            titulo: title,
            descripcion: description,
            estado: status,
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
        taskList.innerHTML = '';  // Limpiar lista antes de agregar nuevas tareas
        querySnapshot.forEach(doc => {
            const task = doc.data();
            const taskId = doc.id;  // ID del documento
            const taskItem = document.createElement('div');
            taskItem.classList.add('task-item');
            taskItem.innerHTML = `
                <h3>${task.titulo}</h3>
                <p>${task.descripcion}</p>
                <small>${task.fecha}</small>
                <p><strong>Estado:</strong> <span id="estado-${taskId}" class="task-status">${task.estado}</span></p>
                <button onclick="deleteTask('${taskId}')">Eliminar</button>
            `;
            
            // Asignar el event listener para cambiar el estado de la tarea
            const statusSpan = taskItem.querySelector(`#estado-${taskId}`);
            statusSpan.addEventListener('click', () => updateTaskStatus(taskId, statusSpan));
            
            taskList.appendChild(taskItem);
        });
    } catch (e) {
        console.error("Error al cargar las tareas: ", e);
    }
}

// Función para actualizar el estado de una tarea
async function updateTaskStatus(taskId, statusElement) {
    const newStatus = prompt("Ingresa el nuevo estado (Pendiente, En Proceso, Completado):", statusElement.textContent);
    if (newStatus && ["Pendiente", "En Proceso", "Completado"].includes(newStatus)) {
        try {
            const taskRef = doc(db, 'tareas', taskId);  // Referencia al documento de la tarea
            await updateDoc(taskRef, { estado: newStatus });  // Actualización del estado
            statusElement.textContent = newStatus;  // Actualizar en la UI
            console.log("Estado de tarea actualizado a:", newStatus);
        } catch (e) {
            console.error("Error al actualizar estado: ", e);
        }
    } else {
        alert("Estado inválido.");
    }
}

// Función para eliminar una tarea
async function deleteTask(taskId) {
    try {
        const taskRef = doc(db, 'tareas', taskId);  // Referencia al documento de la tarea
        await deleteDoc(taskRef);  // Eliminación del documento
        console.log("Tarea eliminada!");
        loadTasks();  // Recargar tareas después de eliminar
    } catch (e) {
        console.error("Error al eliminar tarea: ", e);
    }
}

// Cargar las tareas cuando se carga la página
loadTasks();

