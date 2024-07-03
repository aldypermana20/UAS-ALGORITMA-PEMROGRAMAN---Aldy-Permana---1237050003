function hitungPemenang() {
    const tim1 = document.getElementById('tim1').value;
    const tim2 = document.getElementById('tim2').value;
  
    const skor1Babak1 = parseInt(document.getElementById('skor1Babak1').value) || 0;
    const skor1Babak2 = parseInt(document.getElementById('skor1Babak2').value) || 0;
    const skorTotalTim1 = skor1Babak1 + skor1Babak2;
  
    const skor2Babak1 = parseInt(document.getElementById('skor2Babak1').value) || 0;
    const skor2Babak2 = parseInt(document.getElementById('skor2Babak2').value) || 0;
    const skorTotalTim2 = skor2Babak1 + skor2Babak2;
  
    let pemenang = '';
    if (skorTotalTim1 > skorTotalTim2) {
      pemenang = tim1;
    } else if (skorTotalTim2 > skorTotalTim1) {
      pemenang = tim2;
    } else {
      pemenang = 'Seri';
    }
  
    const hasilPemenang = `Pemenang: ${pemenang}`;
    document.getElementById('pemenang').innerHTML = hasilPemenang;
  
    const skorAkhir = `SKOR AKHIR (${skorTotalTim1}-${skorTotalTim2})`;
    document.getElementById('skorAkhir').innerHTML = skorAkhir;
  }
  