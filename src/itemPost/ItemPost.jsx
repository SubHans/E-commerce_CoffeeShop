import React, { Component } from "react";
import Post from "./post";
import firebase from 'firebase'
import firebaseConfig from '../firebase/config'

class ItemPost extends Component {
  
  constructor(props) {
    super(props)
  
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    } else {
      firebase.app(); // if already initialized, use that one
    }

    this.state = {
      listProduk: [],
      user: {}
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

  ambilDataDariServerAPI = () => {
    const userRef = firebase.database().ref('barang');
    userRef.on('value', (snapshot) => {
      let newUserState = [];
      snapshot.forEach(data => {
        const dataVal = data.val()
        newUserState.push({
          id: data.key,
          nama: dataVal.nama,
          harga: dataVal.harga,
          image: dataVal.image,
          keterangan: dataVal.keterangan
        })
      })
      this.setState({
        listProduk: newUserState
      })
      console.log(this.state);
    })
  }

  componentDidMount() {
    this.ambilDataDariServerAPI();
    this.authListener();
  }

  render() {
    return (
        <div className="container-fluid">
            <h2>Daftar List Produk</h2>
            <div className="card-group">
            <style>{"\.card-group{\margin-top: 10px\}\
            "}</style>
            {this.state.listProduk.map((produk) => {
              return (
                <Post
                  key={produk.id}
                  id={produk.id}
                  nama={produk.nama}
                  harga={produk.harga}
                  keterangan={produk.keterangan}
                  image={produk.image}
                  users={this.state.user ? this.state.user.email : null}
                />
              );
            })}
          </div>
        </div>
    );
  }
}

export default ItemPost;
