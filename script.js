document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-raza');
  const listaRazas = document.getElementById('razas');
  const limpiarBtn = document.getElementById('limpiar');

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const imagen = document.getElementById('imagen').value;

      const li = document.createElement('li');
      li.innerHTML = `
          <img src="${imagen}" alt="${nombre}">
          <span>${nombre}</span>
          <button class="eliminar">Eliminar</button>
      `;
      listaRazas.appendChild(li);

      form.reset();
  });

  listaRazas.addEventListener('click', (e) => {
      if (e.target.classList.contains('eliminar')) {
          e.target.parentElement.remove();
      }
  });

  limpiarBtn.addEventListener('click', () => {
      form.reset();
  });
});
