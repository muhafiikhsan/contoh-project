function combo()
{
let kodebarang = (document.forminput.inputkodebarang.value);
let namabarang = "";
let hargabarang = 0;
let beratbarang = "";
let kodebank = (document.forminput.inputkodebank.value);
let nomorRekening = "";
let warning = "";

	if (kodebarang =="arabika-gayo")
	{
	namabarang = "Kopi Arabika Gayo";
    hargabarang = 25500;
    beratbarang = "250 gram";
	}
	else if(kodebarang=="robusta-temanggung")
	{
	namabarang = "Kopi Robusta Temanggung";
    hargabarang = 23500;
    beratbarang = "250 gram";
	}
	else if(kodebarang=="arabika-flores")
	{
	namabarang = "Kopi Arabika Flores";
    hargabarang = 24500;
    beratbarang = "250 gram";
	}
	else if(kodebarang=="arabika-kintamani")
	{
	namabarang = "Kopi Arabika Kintamani";
    hargabarang = 26500;
    beratbarang = "250 gram";
	} else {
	namabarang = "";
    hargabarang = 0;
    beratbarang = "";
    }
    
    if (kodebank =="mandiri"){
        nomorRekening = "123456789 A/N : Evan Mahendra";
        warning = "Setelah transfer segera konfirmasi ke nomor 082255556666 (WA)";
	}else if(kodebank =="bca") {
        nomorRekening = "321456789 A/N : Evan Mahendra";
        warning = "Setelah transfer segera konfirmasi ke nomor 082255556666 (WA)";
    } else if(kodebank =="bri"){
        nomorRekening = "123654789 A/N : Evan Mahendra";
        warning = "Setelah transfer segera konfirmasi ke nomor 082255556666 (WA)";
    }else if(kodebank =="bni"){
        nomorRekening = "123456987 A/N : Evan Mahendra";
        warning = "Setelah transfer segera konfirmasi ke nomor 082255556666 (WA)";
    } else {
        nomorRekening = "";
        warning = "";
    }

document.forminput.inputnamabarang.value = namabarang;
document.forminput.inputberatbarang.value = beratbarang;
document.forminput.inputhargasatuan.value=eval(hargabarang);
document.forminput.inputnomorRekening.value = nomorRekening;
document.forminput.inputwarning.value = warning;
}

function hitungtotal()
{
let hargabarang = (document.forminput.inputhargasatuan.value);
let jumlahbarang = (document.forminput.inputjumlahbarang.value);
let total = 0;

total = hargabarang * jumlahbarang;

document.forminput.inputtotal.value = eval(total);
}