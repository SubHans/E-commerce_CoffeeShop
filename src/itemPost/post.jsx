import React, { Component } from "react";
// import ItemCart from "../itemCart/ItemCart.jsx";
import { Link, Router, Route } from "react-router-dom";
import firebase from 'firebase'
import firebaseConfig from '../firebase/config'

class Post extends Component {
  constructor(props) {
    super(props);

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }

    this.state = {
      user: {},
      props: this.props,
      insertProduk: {
        userId: props.id,
        id: 1,
        nama: this.props.nama,
        harga: this.props.harga,
        image: this.props.image,
        total_qty: 0,
        total_harga: 0,
      },
    };
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user
        })
        console.log("User adalah : " + user.email)
      }
      else {
        this.setState({
          user: null
        })
      }
    })
  }

  componentDidMount() {
    this.authListener();
  }

  handleIncrement = () => {
    this.setState({
      qty: (this.state.insertProduk.total_qty += 1),
    });
    if (this.state.insertProduk.total_qty >= this.props.keterangan) {
      this.setState({
        qty: (this.state.insertProduk.total_qty = this.props.keterangan),
      });
    }
    this.handleTotal();
  };

  handleTotal = () => {
    this.setState({
      totalHarga: (this.state.insertProduk.total_harga =
        this.props.harga * this.state.insertProduk.total_qty),
      id: (this.state.insertProduk["id"] = new Date().getTime()),
    });
  };

  handleDecrement = () => {
    this.setState({
      qty: (this.state.insertProduk.total_qty -= 1),
    });
    if (this.state.insertProduk.total_qty <= 0) {
      this.setState({
        qty: (this.state.insertProduk.total_qty = 0),
      });
    }
    this.handleTotal();
  };

  handleChanged = (event) => {
    this.setState({
      total_qty: (this.state.insertProduk["total_qty"] = event.target.value),
    });
    this.handleTotal();
  };

  handleSimpan = () => {
    if (this.state.insertProduk.total_qty <= 0) {
      alert("Please enter order quantity");
      this.handleDecrement();
    } else {
      alert("Successfully added to cart");
      var counter = 0;
      const userRef = firebase.database().ref('cart/'+this.state.user.uid+"/"+this.props.id);
      userRef.on('value', function(snapshot) {
          if (snapshot.exists()) {
              const data = snapshot.val();
              counter = data.total_qty;
              console.log("qty:"+counter);
          }
      })

      firebase.database().ref('cart/'+this.state.user.uid+"/"+this.props.id).set({
        userId: this.state.insertProduk.userId,
        id: this.state.insertProduk.id,
        nama: this.state.insertProduk.nama,
        harga: this.state.insertProduk.harga,
        image: this.state.insertProduk.image,
        total_qty: counter + this.state.insertProduk.total_qty,
        total_harga: this.state.insertProduk.total_harga,
      })
    }
  };

  render() {
    return (
      

      <div class="col-md-3 ">
      <div class="card">
            <style>{"\.card{\width: 83%\} \
            "}</style>
            <style>{"\.card{\margin-bottom: 20px\} \
            "}</style>
            <style>{"\.card{\margin-top: 20px\} \
            "}</style>
            <style>{"\.card{\margin-left: auto\} \
            "}</style>
            <style>{"\.card{\margin-right: auto\} \
            "}</style>
            <img class="card-img-top" src={this.props.image} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title"> {this.props.nama} </h5>
              <p class="card-text">Keterangan : {this.props.keterangan}</p>
              <p class="card-text">Harga : Rp. {this.props.harga} /kg</p>
                <p>Jumlah Pemesanan : <text type="text" id="total_qty" name="total_qty" value={this.state.insertProduk.total_qty} onChange={this.handleChanged}>{this.state.insertProduk.total_qty}</text> </p>
                <div class="row">
                  <div class="col">
                    <button type="button" class="btn btn-warning" onClick={this.handleDecrement} >-</button>
                  </div>
                  <div class="col">
                      <button type="button" class="btn btn-warning" onClick={this.handleIncrement} >+</button>
                  </div>
                </div>

                <style>{"\.btn {\margin-left: 40%\} \
                "}</style>
                <style>{"\.btn {\margin-right: 40%\} \
                "}</style>
                 <style>{"\.btn {\align: center\} \
                "}</style>

                <br></br>
                <br></br>
                <button type="Add to Cart" class="btn btn-primary"
                onClick={() => {
                    if(this.props.users){
                      this.handleSimpan()
                      
                    } else {
                      alert("Please, login first");
                    }
                  }
                }className="button_cart">
                  Beli
                </button>
          </div>
      </div>
      </div>
    );
  }
}

export default Post;
