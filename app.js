// Configuración de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc, query, getDocs } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

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

const form = document.getElementById('preferences-form');
const menuContainer = document.getElementById('menu-container');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const vegetariano = document.getElementById('vegetariano').checked;
    const sinGluten = document.getElementById('sin-gluten').checked;
    const calorias = document.getElementById('calorias').value;

    const menu = await generarMenu(vegetariano, sinGluten, calorias);
    mostrarMenu(menu);
    guardarMenu(menu);
});

async function generarMenu(vegetariano, sinGluten, calorias) {
    const platos = await obtenerPlatos();
    return platos
        .filter(plato =>
            (!vegetariano || plato.vegetariano) &&
            (!sinGluten || plato.sinGluten) &&
            (!calorias || plato.calorias <= calorias)
        )
        .sort(() => 0.5 - Math.random())
        .slice(0, 7);
}

function mostrarMenu(menu) {
    menuContainer.innerHTML = menu.map(plato => `<p>${plato.nombre}</p>`).join('');
}

async function guardarMenu(menu) {
    try {
        await addDoc(collection(db, 'menus'), { menu, fecha: new Date().toISOString() });
    } catch (e) {
        console.error('Error guardando el menu: ', e);
    }
}

async function obtenerPlatos() {
    const q = query(collection(db, 'platos'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => doc.data());
}
