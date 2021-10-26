import React from 'react';

export default function Footer() {
    return (
        <footer class="text-center text-white" style="background-color: #f1f1f1;">
  {/* <!-- Grid container --> */}
  <div class="container pt-4">
    {/* <!-- Section: Social media --> */}
    <section class="mb-4">
      
      {/* <!-- Linkedin --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>
      {/* <!-- Github --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

 
</footer>
    )
}