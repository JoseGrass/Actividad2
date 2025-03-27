// Definir los platos directamente en el código
const platos = [
    { nombre: 'Ensalada de Quinoa', vegetariano: true, sinGluten: true, calorias: 200 },
    { nombre: 'Pizza Vegetariana', vegetariano: true, sinGluten: false, calorias: 450 },
    { nombre: 'Sopa de Lentejas', vegetariano: true, sinGluten: true, calorias: 300 },
    { nombre: 'Pollo a la Parrilla', vegetariano: false, sinGluten: true, calorias: 400 },
    { nombre: 'Tacos de Pescado', vegetariano: false, sinGluten: true, calorias: 350 },
    { nombre: 'Hamburguesa de Carne', vegetariano: false, sinGluten: false, calorias: 600 },
    { nombre: 'Pasta al Pesto', vegetariano: true, sinGluten: false, calorias: 500 },
    { nombre: 'Sushi', vegetariano: false, sinGluten: true, calorias: 250 },
    { nombre: 'Bowl de Acai', vegetariano: true, sinGluten: true, calorias: 180 },
    { nombre: 'Lasagna Vegetariana', vegetariano: true, sinGluten: false, calorias: 550 },
    { nombre: 'Pollo con Papas', vegetariano: false, sinGluten: true, calorias: 600 },
    { nombre: 'Crema de Calabaza', vegetariano: true, sinGluten: true, calorias: 180 },
    { nombre: 'Tacos de Carne Asada', vegetariano: false, sinGluten: false, calorias: 400 },
    { nombre: 'Ramen', vegetariano: false, sinGluten: false, calorias: 500 },
    { nombre: 'Ensalada César', vegetariano: false, sinGluten: false, calorias: 350 },
    { nombre: 'Pan de Ajo', vegetariano: true, sinGluten: false, calorias: 150 },
    { nombre: 'Paella', vegetariano: false, sinGluten: true, calorias: 550 },
    { nombre: 'Pescado al Horno', vegetariano: false, sinGluten: true, calorias: 300 },
    { nombre: 'Tortilla Española', vegetariano: true, sinGluten: true, calorias: 400 },
    { nombre: 'Ensalada de Tomate y Mozarella', vegetariano: true, sinGluten: true, calorias: 250 },
    { nombre: 'Pizza Margarita', vegetariano: true, sinGluten: false, calorias: 400 },
    { nombre: 'Burritos', vegetariano: false, sinGluten: false, calorias: 600 },
    { nombre: 'Pollo al Curry', vegetariano: false, sinGluten: true, calorias: 550 },
    { nombre: 'Ensalada de Atún', vegetariano: false, sinGluten: true, calorias: 350 },
    { nombre: 'Sopa de Fideos', vegetariano: true, sinGluten: false, calorias: 250 },
    { nombre: 'Falafel', vegetariano: true, sinGluten: true, calorias: 300 },
    { nombre: 'Fajitas de Pollo', vegetariano: false, sinGluten: false, calorias: 400 },
    { nombre: 'Pizza de Pollo', vegetariano: false, sinGluten: false, calorias: 500 },
    { nombre: 'Moussaka', vegetariano: false, sinGluten: false, calorias: 450 },
    { nombre: 'Tortitas de Papa', vegetariano: true, sinGluten: false, calorias: 350 },
    { nombre: 'Chili con Carne', vegetariano: false, sinGluten: true, calorias: 550 },
    { nombre: 'Ensalada de Garbanzos', vegetariano: true, sinGluten: true, calorias: 300 },
    { nombre: 'Salmón a la Parrilla', vegetariano: false, sinGluten: true, calorias: 400 },
    { nombre: 'Tostadas con Aguacate', vegetariano: true, sinGluten: false, calorias: 250 },
    { nombre: 'Spaghetti Carbonara', vegetariano: false, sinGluten: false, calorias: 500 },
    { nombre: 'Wrap de Pollo', vegetariano: false, sinGluten: false, calorias: 400 },
    { nombre: 'Pollo Empanizado', vegetariano: false, sinGluten: false, calorias: 450 },
    { nombre: 'Pasta Alfredo', vegetariano: false, sinGluten: false, calorias: 600 },
    { nombre: 'Guiso de Carne', vegetariano: false, sinGluten: true, calorias: 500 },
    { nombre: 'Pizza de Peperoni', vegetariano: false, sinGluten: false, calorias: 600 },
    { nombre: 'Ensalada de Frutas', vegetariano: true, sinGluten: true, calorias: 150 },
    { nombre: 'Galletas de Avena', vegetariano: true, sinGluten: false, calorias: 200 },
    { nombre: 'Quiche de Espinaca', vegetariano: true, sinGluten: false, calorias: 400 },
    { nombre: 'Sopa de Mariscos', vegetariano: false, sinGluten: true, calorias: 300 },
    { nombre: 'Curry de Garbanzos', vegetariano: true, sinGluten: true, calorias: 350 },
    { nombre: 'Tarta de Manzana', vegetariano: true, sinGluten: false, calorias: 400 },
    { nombre: 'Pechuga de Pollo al Limón', vegetariano: false, sinGluten: true, calorias: 350 },
    { nombre: 'Croquetas de Jamón', vegetariano: false, sinGluten: false, calorias: 250 },
    { nombre: 'Sushi Vegetariano', vegetariano: true, sinGluten: true, calorias: 200 },
    { nombre: 'Baguette con Jamón', vegetariano: false, sinGluten: false, calorias: 400 },
    { nombre: 'Pasta con Tomate', vegetariano: true, sinGluten: false, calorias: 350 },
    { nombre: 'Hamburguesa Vegana', vegetariano: true, sinGluten: true, calorias: 350 },
    { nombre: 'Tacos de Pollo', vegetariano: false, sinGluten: false, calorias: 500 },
    { nombre: 'Ensalada Caprese', vegetariano: true, sinGluten: true, calorias: 250 },
    { nombre: 'Tarta de Queso', vegetariano: true, sinGluten: false, calorias: 450 },
    { nombre: 'Bowl de Buddha', vegetariano: true, sinGluten: true, calorias: 350 },
    { nombre: 'Tortilla Mexicana', vegetariano: true, sinGluten: false, calorias: 300 },
    { nombre: 'Arroz Frito', vegetariano: false, sinGluten: true, calorias: 400 },
    { nombre: 'Ceviche', vegetariano: false, sinGluten: true, calorias: 200 },
    { nombre: 'Ratatouille', vegetariano: true, sinGluten: true, calorias: 350 },
    { nombre: 'Pechuga de Pollo al Curry', vegetariano: false, sinGluten: true, calorias: 500 },
    { nombre: 'Burrito de Carne', vegetariano: false, sinGluten: false, calorias: 600 },
    { nombre: 'Tostadas con Huevo', vegetariano: true, sinGluten: false, calorias: 350 },
    { nombre: 'Ensalada de Pollo', vegetariano: false, sinGluten: true, calorias: 350 },
    { nombre: 'Acelgas a la Valenciana', vegetariano: true, sinGluten: true, calorias: 250 },
    { nombre: 'Tacos de Carnitas', vegetariano: false, sinGluten: false, calorias: 500 },
    { nombre: 'Pasta Bolognesa', vegetariano: false, sinGluten: false, calorias: 600 },
    { nombre: 'Kebab de Pollo', vegetariano: false, sinGluten: true, calorias: 400 },
    { nombre: 'Pechuga de Pollo con Vegetales', vegetariano: false, sinGluten: true, calorias: 350 },
    { nombre: 'Tacos Veganos', vegetariano: true, sinGluten: true, calorias: 300 },
    { nombre: 'Sopa de Pollo', vegetariano: false, sinGluten: true, calorias: 250 },
    { nombre: 'Macarrones con Queso', vegetariano: false, sinGluten: false, calorias: 500 },
    { nombre: 'Pasta Primavera', vegetariano: true, sinGluten: false, calorias: 450 },
    { nombre: 'Sopa Minestrone', vegetariano: true, sinGluten: true, calorias: 300 },
    { nombre: 'Arroz con Pollo', vegetariano: false, sinGluten: true, calorias: 500 },
    { nombre: 'Pizza de Jamón y Queso', vegetariano: false, sinGluten: false, calorias: 550 },
    { nombre: 'Fideos con Carne', vegetariano: false, sinGluten: false, calorias: 500 },
    { nombre: 'Pechuga de Pollo a la Mostaza', vegetariano: false, sinGluten: true, calorias: 350 },
    { nombre: 'Sopa de Espárragos', vegetariano: true, sinGluten: true, calorias: 180 },
    { nombre: 'Tortas de Papa', vegetariano: true, sinGluten: false, calorias: 300 },
    { nombre: 'Ensalada de Pollo al Curry', vegetariano: false, sinGluten: true, calorias: 400 },
    { nombre: 'Croquetas de Pollo', vegetariano: false, sinGluten: false, calorias: 250 }
];


const form = document.getElementById('preferences-form');
const menuContainer = document.getElementById('menu-container');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const vegetariano = document.getElementById('vegetariano').checked;
    const sinGluten = document.getElementById('sin-gluten').checked;
    const calorias = document.getElementById('calorias').value;

    const menu = generarMenu(vegetariano, sinGluten, calorias);
    mostrarMenu(menu);
    guardarMenu(menu);
});

function generarMenu(vegetariano, sinGluten, calorias) {
    // Filtrar platos según los criterios seleccionados
    const menu = platos
        .filter(plato =>
            (!vegetariano || plato.vegetariano) &&
            (!sinGluten || plato.sinGluten) &&
            (!calorias || plato.calorias <= calorias)
        );
    
    // Mezclar platos aleatoriamente y limitar a 7 platos
    return menu
        .sort(() => 0.5 - Math.random())
        .slice(0, 7);
}

function mostrarMenu(menu) {
    if (menu.length === 0) {
        menuContainer.innerHTML = "<p>No se encontraron platos con esos criterios.</p>";
        return;
    }
    menuContainer.innerHTML = menu.map(plato => `<p>${plato.nombre}</p>`).join('');
}

function guardarMenu(menu) {
    // Aquí, si quieres guardar el menú en alguna parte, puedes implementarlo
    console.log("Menú generado: ", menu);
}
