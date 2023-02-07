import React from 'react'

function Footer() {
  return (
    <div className="footer">
          <footer class="bg-light text-center text-lg-start">
            <div class="container p-4">
              <div class="row">
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">ArtShop</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-dark">Link 1</a>
                    </li>
                    <li>
                      <a href="#!" class="text-dark">Link 2</a>
                    </li>
                  </ul>
                </div>

              

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase">Get In Touch</h5>
                  
                  <ul class="list-unstyled">
                    <li>
                      <a href="#!" class="text-dark">Link 1</a>
                    </li>
                    <li>
                      <a href="#!" class="text-dark">Link 2</a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase mb-0">Follow Us</h5>
                </div>
              </div>
            </div>

            <div class="copyright">
              © 2020 Copyright: ArtShop
            </div>
          </footer>
    </div>
  // REFERENCE FOOTER FROM BOOTSTRAP
  )
}

export default Footer