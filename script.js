function luas_persegi(panjang, lebar) {
  let luas = panjang * lebar;
  if (!panjang || !lebar) {
    alert('Masukkan Nilai Terlebih dahulu!.');
    return;
  }

  document.getElementById('output_1').innerHTML = `Hasil = ${luas}`;
}

function keliling_persegi(panjang_k, lebar_k) {
  let keliling = 2 * (panjang_k * lebar_k);
  if (!panjang_k || !lebar_k) {
    alert('Masukkan Nilai Terlebih dahulu!.');
    return;
  }

  document.getElementById('output_2').innerHTML = `Hasil = ${keliling}`;
}

function lingkaran(jari_jari) {
  let diameter_l = 2 * jari_jari;
  let keliling_l = 2 * (jari_jari * 3.14);
  let luas_l = 3.14 * (jari_jari * jari_jari);
  if (!jari_jari) {
    alert('Masukkan Nilai Terlebih dahulu!.');
    return;
  }

  document.getElementById('output_d').innerHTML = `Diameter = ${diameter_l}`;
  document.getElementById('output_l').innerHTML = `Keliling = ${keliling_l}`;
  document.getElementById('output_k').innerHTML = `Luas = ${luas_l}`;
}

function segitiga(sudut_a, sudut_b) {
  let a = parseInt(sudut_a);
  let b = parseInt(sudut_b);
  let sudut = 180 - (a + b);
  if (!sudut_a || !sudut_b) {
    alert('Masukkan Nilai Terlebih dahulu!.');
    return;
  }

  document.getElementById('output_3').innerHTML = `Hasil = ${sudut}`;
}

function hitungSelisih(tgl_a, tgl_b) {
  let waktu = new Date(tgl_b).getTime() - new Date(tgl_a).getTime();
  let hari  = Math.abs(waktu / (1000 * 3600 * 24));

  if (!tgl_a || !tgl_b) {
    alert('Masukkan kedua tanggal terlebih dahulu!');
    return;
  }

  document.getElementById('output_4').innerHTML = `Selisih Tanggal = ${hari} hari`;
}

function konversiHari() {
  let jumlahari = document.getElementById('jumlahHari').value.trim();
  
  if (!jumlahari) {
    alert('Masukkan kedua tanggal terlebih dahulu!');
    return;
  }

  let hari = parseInt(jumlahari);

  let tahun = Math.floor(hari / 365);
  let a = hari % 365;

  let bulan = Math.floor(a / 30);
  let b = a % 30;

  let hasilKonversi = `${tahun} tahun, ${bulan} bulan, ${b} hari`;
  document.getElementById('hasilKonversi').innerHTML = hasilKonversi;
}