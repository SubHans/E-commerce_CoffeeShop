import React, { Component } from "react";
import PostCart from "./PostCart";
import firebase from "firebase";
import firebaseConfig from '../firebase/config';

class ItemCart extends Component {
  constructor(props) {
    super(props)

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); 
    }

    this.state = {
      listCart: [],
      totalHarga: 0,
      nom: 0,
      user: {}
    };

    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user
        })
        console.log("User adalah : " + user.email)
        this.ambilDataDariServerAPI();
      }
      else {
        this.setState({
          user: null
        })
      }
    })
  }

  ambilDataDariServerAPI = (uid) => {
    const userRef = firebase.database().ref('cart/' + this.state.user.uid);
    userRef.once('value', (snapshot) => {
      let newUserState = [];
      snapshot.forEach(data => {
        const dataVal = data.val()
        newUserState.push({
          key: data.key,
          userId: dataVal.userId,
          id: dataVal.id,
          image: dataVal.image,
          nama: dataVal.nama,
          harga: dataVal.harga,
          total_harga: dataVal.total_harga,
          total_qty: dataVal.total_qty
        })
      })
      this.setState({
        listCart: newUserState
      })
      console.log(this.state);
    })
  }

  componentDidMount() {
    this.authListener();
  }

  componentDidUpdate(prevProps, prevState) {
  }

  handleHapus = (idProduk) => {
    firebase.database().ref("cart/" + this.state.user.uid + "/" + idProduk).remove();
    this.ambilDataDariServerAPI();
  }

  handleUpdate = (userId, id, name, price, img, tPrice, tQty) => {

    firebase.database().ref("cart/" + this.state.user.uid + "/" + userId)
      .set({
        userId: userId,
        id: id,
        nama: name,
        harga: price,
        image:img,
        total_harga: tPrice,
        total_qty: tQty
      });
      this.ambilDataDariServerAPI();
  }

  render() {
    var no = 0;
    var total=0;
    return (
      <div className="container-cart">
                {this.state.listCart.map((cart) => {
                  no += 1;
                  return (
                    (this.state.nom += 1),
                    (
                      <PostCart
                        key={cart.userId}
                        id={cart.userId}
                        nama={cart.nama}
                        nom={no}
                        harga={cart.harga}
                        image={cart.image}
                        total_qty={cart.total_qty}
                        total_harga={cart.total_harga}
                        handleHapus={this.handleHapus}
                        handleUpdate={this.handleUpdate}
                      />
                    )
                  );
                })}
                
                {this.state.listCart.map((cart) => {
                  total+=cart.harga*cart.total_qty

                })}
                <div className="container-cart">
                    <div class="row">
                      <div class="col">
                        <div class="text-total-hasil-harga"> 
                          <h4>Total </h4>
                        </div>
                      </div>
                      <div class="col">
                        <div class="text-total-harga"> 
                        <h5>Rp. {total}</h5>
                        </div>
                      </div>
                    </div>
                </div>
                
                
              
           
            </div>
         
    );
  }
}

export default ItemCart;
