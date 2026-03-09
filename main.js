import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDf84tuPbEIrQ4b2jcU0MeXjg4OY3kE-yU",
  authDomain: "insancemerlang-7c3fb.firebaseapp.com",
  projectId: "insancemerlang-7c3fb",
  storageBucket: "insancemerlang-7c3fb.firebasestorage.app",
  messagingSenderId: "775357332019",
  appId: "1:775357332019:web:25b794ac39eceb84f00146",
  measurementId: "G-2T6Q5VM932"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const dataguruCollection = collection(db, "dataguru");



// TAMPILKAN DAFTAR GURU
export async function daftardataguru() {
  const snapshot = await getDocs(dataguruCollection);
  const tabel = document.getElementById("tabelData");
  tabel.innerHTML = "";

  snapshot.forEach((d) => {
    const data = d.data();
    const id = d.id;

    const baris = document.createElement("tr");

    const kolomNIP = document.createElement("td");
    kolomNIP.textContent = data.NIP;

    const kolomNAMA= document.createElement("td");
    kolomNAMA.textContent = data.NAMA;

    const kolomJENISKELAMIN= document.createElement("td");
    kolomJENISKELAMIN.textContent = data.JENISKELAMIN;

    const kolomTGLLAHIR= document.createElement("td");
    kolomTGLLAHIR.textContent = data.TGLLAHIR;
    
    const kolomMAPEL= document.createElement("td");
    kolomMAPEL.textContent = data.MAPEL;

   const kolomALAMAT= document.createElement("td");
    kolomALAMAT.textContent = data.ALAMAT;

   const kolomNOTLP = document.createElement("td");
    kolomNOTLP.textContent = data.NOTLP;

   const kolomEMAIL= document.createElement("td");
    kolomEMAIL.textContent = data.EMAIL;

   const kolomPENDIDIKAN_TERAKHIR= document.createElement("td");
    kolomPENDIDIKAN_TERAKHIR.textContent = data.PENDIDIKAN_TERAKHIR;

   
    const kolomAksi = document.createElement("td");

    // tombol edit
    const tombolEdit = document.createElement("a");
    tombolEdit.textContent = "Edit";
    tombolEdit.href = "edit.html?id=" + id;
    tombolEdit.className = "button edit";

    // tombol hapus
    const tombolHapus = document.createElement("button");
    tombolHapus.textContent = "Hapus";
    tombolHapus.onclick = () => hapusdataguru(id);

    kolomAksi.appendChild(tombolEdit);
    kolomAksi.appendChild(document.createTextNode(" "));
    kolomAksi.appendChild(tombolHapus);

    baris.appendChild(kolomNIP);
    baris.appendChild(kolomNAMA);
    baris.appendChild(kolomJENISKELAMIN);
    baris.appendChild(kolomTGLLAHIR);
    baris.appendChild(kolomMAPEL);
    baris.appendChild(kolomALAMAT);
    baris.appendChild(kolomNOTLP);
    baris.appendChild(kolomEMAIL);
    baris.appendChild(kolomPENDIDIKAN_TERAKHIR);
    baris.appendChild(kolomAksi);

    tabel.appendChild(baris);
  });
}


// TAMBAH DATA GURU

export async function tambahdataguru() {
  const NIP = document.getElementById("NIP").value;
  const NAMA = document.getElementById("NAMA").value;
  const JENISKELAMIN = document.getElementById("JENISKELAMIN").value;
  const TGLLAHIR= document.getElementById("TGLLAHIR").value;
  const MAPEL = document.getElementById("MAPEL").value;
  const ALAMAT = document.getElementById("ALAMAT").value;
  const NOTLP = document.getElementById("NOTLP").value;
  const EMAIL = document.getElementById("EMAIL").value;
  const PENDIDIKAN_TERAKHIR = document.getElementById("PENDIDIKAN_TERAKHIR").value;
  
  
  await addDoc(dataguruCollection, {
    NIP: NIP,
    NAMA: NAMA,
    JENISKELAMIN : JENISKELAMIN, 
    TGLLAHIR: TGLLAHIR, 
    MAPEL : MAPEL, 
    ALAMAT : ALAMAT, 
    NOTLP : NOTLP, 
    EMAIL : EMAIL, 
    PENDIDIKAN_TERAKHIR
  });

  window.location.href = "daftar.html";
}



// HAPUS DATA GURU

export async function hapusdataguru(id) {
  if (!confirm("Yakin ingin menghapus data ini?")) return;

  await deleteDoc(doc(db, "dataguru", id));
  await daftardataguru();
}


// AMBIL DATA GURU
export async function ambildataguru(id) {
  const ref = doc(db, "dataguru", id);
  const snap = await getDoc(ref);
  return snap.data();
}


// UBAH DATA GURU

export async function ubahdataguru(id) {
  const NIP = document.getElementById("NIP").value;
  const NAMA = document.getElementById("NAMA").value;
  const JENISKELAMIN= document.getElementById("JENISKELAMIN").value;
  const TGLLAHIR= document.getElementById("TGLLAHIR").value;
  const MAPEL= document.getElementById("MAPEL").value;
  const ALAMAT= document.getElementById("ALAMAT").value;
  const NOTLP= document.getElementById("NOTLP").value;
  const EMAIL= document.getElementById("EMAIL").value;
  const PENDIDIKAN_TERAKHIR= document.getElementById("PENDIDIKAN_TERAKHIR").value;


  await updateDoc(doc(db, "dataguru", id), {
    NIP: NIP,
    NAMA: NAMA,
    JENISKELAMIN:JENISKELAMIN, 
    TGLLAHIR: TGLLAHIR, 
    MAPEL : MAPEL, 
    ALAMAT : ALAMAT, 
    NOTLP : NOTLP, 
    EMAIL : EMAIL, 
    PENDIDIKAN_TERAKHIR
  });

  window.location.href = "daftar.html";
}
 const dataguru= document.getElementById("DATAGURU");
