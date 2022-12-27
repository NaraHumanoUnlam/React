import React from 'react';
const Home = () => {

  return (
    <div>
      <h1>Inicio</h1>
      <div id="carouselExampleControls" class="carousel slide align-middle" data-bs-ride="carousel">
  <div class="carousel-inner w-100">
    <div class="carousel-item active w-100">
    <div class="carousel-caption d-none d-md-block text-primary">
        <h1>Bienvenido</h1>
        <p>Productos Naturales más accesibles.</p>
      </div>
      <img src="img/productos-naturales.jpg" class="d-block w-100" alt="natural"></img>      
    </div>
    <div class="carousel-item">
    <div class="carousel-caption d-none d-md-block text-primary">
        <h1>Bienvenido</h1>
        <p>Productos Naturales más accesibles.</p>
      </div>
      <img src="img/cremas.jpg" class="d-block w-100" alt="cremas"></img>
    </div>
    <div class="carousel-item">
    <div class="carousel-caption d-none d-md-block text-primary">
        <h1>Bienvenido</h1>
        <p>Productos Naturales más accesibles.</p>
      </div>
      <img src="img/aceites.jpg" class="d-block w-100" alt="natural"></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Home