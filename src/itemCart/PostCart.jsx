import React, { useState } from "react";

const PostCart = (porps) => {

  const [total, setTotal] = useState(porps.total_qty);

  return (
    <div className="container-cart">
    <div class="row">
      <div class="col-4">
        <div class=".text-total-harga">
          <img class="card-img-top" src={porps.image}/>
          <style>{"\.card-img-top{\width: 17rem\ }\
          "}</style></div>
        </div>
      <div class="col-8">
          <div class="col">
            <div class="row">
              <div class="col">
                <div class="col-nama">
                  <h4>{porps.nama}</h4>
                </div>
                </div>
              <div class="col">
              <div class="row">
                    <div class="text-total-harga"> 
                        <button type="button" class="btn btn-danger" onClick={() => { porps.handleHapus(porps.id) }}>x</button>
                    </div>
              </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
                <div class="col">
                  <div class="row">
                    <div class="col">
                      <div class="text-total"> 
                      <button type="button" class="btn btn-light" onClick={() => setTotal(total - 1)}>-</button>
                      </div>
                    </div>
                    <div class="col">
                        <div class="text-total"  type="text">{total}</div>
                    </div>
                    <div class="col">
                    <div class="text-total"> 
                      <button type="button" class="btn btn-light" onClick={() => setTotal(total + 1)}>+</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-total-harga"> 
                  Harga &emsp; Rp. {porps.harga}
                  </div>
                </div>
            </div>
          </div>
          <div class="col">
            <div class="row">
                <div class="col">
                  <div class="row">
                    <div class="col">
                      <div class="text-total"> 
                          <button type="button" class="btn btn-success" onClick={() => { porps.handleUpdate(porps.id, porps.id, porps.nama, porps.harga, porps.image, porps.total_harga, total)}}>Simpan</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="text-total-harga"> 
                  Subtotal &emsp; Rp. {porps.harga*porps.total_qty}
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  );
};

export default PostCart;
