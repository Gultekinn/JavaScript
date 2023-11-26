//Document write ile cikti verme
// document.write("Hello Word <br>");
// document.write("Gultekin")
//!coxlu if ic ice if
// let ad = prompt("adinizi yazin!!");
// let pin = prompt("pin kodunuzu daxil edin");

// kontrolEt(ad, pin);
// function kontrolEt(ad, pin) {
//   if (ad != "") {

//     if (pin.length == 7) {
//       console.log("Ad ve PIN ugurla daxil oldu");
//     } else console.log("PIN 7 karakterli olsin!");
//   } else {
//     console.log("Adinizi qeyd edin!");
//   }
// }

//!beden kilo hesablanmasi
// let kilo = Number(prompt("kilonuzu daxil edin!"));
// let boy = Number(prompt("boyunuzu daxil edin"));
// let sonuc = kilo / (boy * 2);
// if (sonuc < 18.5) {
//   console.log("ideaol kilonun altindasiz" + sonuc);
// } else if (sonuc >= 18.5 && sonuc <= 24.9) {
//   console.log("ideal kilonun altindasiniz " + sonuc);
// } else if (sonuc >= 25 && sonuc <= 29.9) {
//   console.log("ideal kilodasiniz" + sonuc);
// } else if (sonuc >= 30 && sonuc <= 39.9) {
//   console.log("obez" + sonuc);
// } else if (sonuc >= 40) {
//   console.log("morbid obez" + sonuc);
// }
//!   switch case
// let sayi = prompt("1 ve 5 arasinda reqem daxil edin");
// switch (
//   sayi //"1" "2" "3" "4" "5"
// ) {
//   case "1":
//     //kodlariniz
//     console.log("daxil edilen reqem 1 dir");
//     break;
//   case "2":
//     //kodlariniz

//     console.log("daxil edilen reqem 2 dir");
//     break;
//   case "3":
//     //kodlariniz
//     console.log("daxil edilen reqem 3 dir");
//     break;
//   case "4":
//     //kodlariniz

//     console.log("daxil edilen reqem 4 dir");
//     break;

//   case "5":
//     //kodlariniz

//     console.log("daxil edilen reqem 5 dir");
//     break;
//     default:
//         console.log("daxil edilen reqem 1-5 arasinda olmalidir!!");
//         break;
// }

// let yeniSetr = "\r\n";
// let metin =
//   "1-Bazarertesi" +
//   yeniSetr +
//   "2-Cersenbeaxsami" +
//   yeniSetr +
//   "3-cersenbe" +
//   yeniSetr +
//   "4-cumeaxsami" +
//   yeniSetr +
//   "5-cume" +
//   yeniSetr +
//   "6-Senbe" +
//   yeniSetr +
//   "7-bazar" +
//   yeniSetr +
//   "Xahis olunur gun secin";

// let value = prompt(metin);
// switch (value) {
//   case "1":
//     console.log("Bazarertesi");
//     break;
//   case "2":
//     console.log("Cersenbeaxsami");
//     break;
//   case "3":
//     console.log("cersenbe");
//     break;
//   case "4":
//     console.log("cumeaxsami");
//     break;
//   case "5":
//     console.log("cume");
//     break;
//   case "6":
//     console.log("Senbe");
//     break;
//   case "7":
//     console.log("Bazar");
//     break;
//   default:
//     console.log("Xahis olunur bir gun secin");
// }

//!BANKA KARTI ALQORITMI
// 1- balans
//2-meblegi artirin
//3-meblegi daxil edin

// let yeniSetr = "\r\n";
// let balance = 1000;
// let metin =
//   "1-balansi goster" +
//   yeniSetr +
//   "2-meblegi daxil et" +
//   yeniSetr +
//   "3-meblegi artir" +
//   yeniSetr +
//   "Xahis olunur bir deyer secin";
// let secim = prompt(metin);
// switch (secim) {
//   case "1":
//     alert("Balansiniz : " + balance);
//     break;
//   case "2":
//     let cekilecekMebleq = Number(
//       prompt("Cekmek isdeiyiniz balansi daxil edin :")
//     );
//     if (cekilecekMebleq < balance) {
//       balance = balance - cekilecekMebleq;
//       alert("balance:" + balance);
//     } else {
//       alert(
//         "balansda pul yoxdur" +
//           yeniSetr +
//           "Balance :" +
//           balance +
//           "   " +
//           "Cekilecek mebleq:" +
//           cekilecekMebleq
//       );
//     }
//     break;
//   case "3":
//     let balansArtir = Number(prompt("Pulu daxil edin : "));
//     balance = balance + balansArtir;
//     alert("umumi balans :" + balance);
//     break;
// }

// !for dongusu
// // 1 den 10 kimi yazdir
//  for(let i=1;i<=10;i++){
//     console.log(i);
//  }
// // 1 den 10 a kimi cutleri yazdirmaq
// for(let i=0; i<=10; i+=2 ){
//     console.log(i)
// }
// //1 den 10 a kimi tekler
// for(let i=1; i<=10; i+=2){
//     console.log(i)
// }

// // i tek olarsa gulu i cut olursa lale yazsin
// for(let i=1; i<=10; i++){
//     if(i%2==1){
//         console.log("lale")
//     }else{
//         console.log('gulu')
//     }
// }

// // 50 den 1 e kimi get ve cemini tap
// let sum=0
// for(let i=50; i>=1; i--){
//     sum+=i
// console.log(i)
// }
// console.log(sum)

//! while dongusu
// let saygac=1;
// while(saygac<=10){
//     console.log(saygac);
////eger bele olarsa sonsuz donguye girer buna gore asagidaki kimi yazacayiq
// saygac++;
// }

// //tek ededler
// let saygac=0;
// while(saygac<=10){
//     if(saygac%2==1){
//         console.log(saygac)
//     }
//     saygac++
// }

// //eger meselen 1 den 10 a kimi ededlerden sadece 7 e kimi yazdirmaq isdiyirsense

// let saygac=1;
// while(true){
//     console.log(saygac);
//     if(saygac==7){
//         break;
//         //yani 7 e kimi yazdir ekrana sonra durdur breakla
//     }
//     saygac++
// }

// //do ve while

// do{
//     //kodlar
// }while(sart)

// // 1den 10 a kadar yazdiralim
// let saygac=1;

// do{
// console.log(saygac);
// saygac++;
// }while(saygac<=10);

//break  -   continue
//!break
// // 1 den 10 a kadar sayilari yazilsin 8 e catanda donguusnden cixsin
// let saygac = 1;
// while (saygac <= 10) {
//   console.log(saygac);
//   if (saygac == 8) {
//     break;
//   }
//   saygac++;
// }

//? continue
// // 1 2 3 4 5 6 8 9 10
// let saygac = 0;
// while (saygac <= 10) {
//   saygac++;
//   if (saygac == 7) {
//     continue;
//   }
//   console.log(saygac);
// }

// //vurma cedveli
// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(i + "x" + j + "=" + i * j);
//   }
//   console.log("...............................");
// }

// //153=1*1*1+5*5*5+3*3*3

// let sayi=prompt("sayi daxil edin")
// let toplam=0;
// for(let i=0;i<sayi.length;i++){
//   let rakam=  sayi.charAt(i);
//   toplam+=rakam*rakam*rakam;
// }
// if(Number(sayi)==toplam){
//     alert("Arastrong sayisidir")
// }else{

//     alert("arastrong sayisi degildir")
// }

//! Metodlar

//! Parametirli metod tanimlamak
// function yazdir(ad,soyad){
//     console.log(ad+""+soyad);

// }
// yazdir("Gultekin","Azizova");
// yazdir("Lale","Azizli");
// //parametrlerde let kimi deyerler tanimaz.

// let yas =Number(prompt("Yasinizi girin"))
// kontrolEt(yas);
// function kontrolEt(yas){
//     if(yas>=18){
//         console.log("Ehliyet ala bilersiz")
//     }
// else{
//     console.log("ehliyet ala bilmersiz")
// }
// }

//!geriye deger qaytaran metod tanimaq----return

// cube(3)
// function cube(sayi){
//     let sonuc=sayi*sayi*sayi
//     console.log(sonuc);
// }
// // bu kodda  sonucu {} colune yazsaq tanimayacaq buna gore return metodundan istifade olunur yeni geriye deyer qaytarir

// let donenDeger=cube(3)
// console.log(donenDeger)

// function cube(sayi){
//     let sonuc=sayi*sayi*sayi;
//     return sanouc
// }

//? 1-return -bir deegeri metodun colune cixarmaq dasimaq ucundur
//? 2- bir metodu bitiren acar sozdur

//! soz sayisi tapma uygulamasi

// let metin = "Hal hazirda javascript derslerine baxiram.";
// let herf = prompt("Herf daxil edin");
// let sonuc = bul(herf);
// alert("herf sayisi :"+sonuc)
// function bul(herf) {
//   let toplam = 0;
//   for (let i = 0; i < metin.length; i++) {
//     if(metin.charAt(i).toLowerCase()===herf.toLowerCase()){
//             toplam += 1;

//     }
//   }
//   return toplam;
// }

//! mukemmel reqem uygulamasi

// // sayinin bolenlerinin cemi sayinin iki qatidirsa mukkemer reqemdir
// isPerfectNumber(20)

// function isPerfectNumber(number) {
//   let toplam = 0;
//   for (let i = 2; i<=number / 2; i++) {
//     if (number % i == 0) {
//       toplam += i;
//     }
//   }
//   toplam += 1 + number;
//   if (toplam == number * 2) {
//     console.log("mukkemel reqem");
//   } else {
//     console.log("mukkemel sayi reqem");
//   }
// }

//! Decimal to binary conversion
// convertDecimalToBinary(20);
// function convertDecimalToBinary(number) {
//   let binary = "";
//   while (true) {
//     binary += (number % 2).toString();
//     number = Math.floor(number / 2);

//     if (number == 1) {
//       //artiq bolmeyeciik
//       binary += 1;
//       break;
//     }
//   }
//   let result = reverse(binary);
//   console.log(result);
// }
// function reverse(binary) {
//   let reverseBinary = "";
//   for (let i = binary.length - 1; i > 0; i--) {
//     reverseBinary += binary.charAt(i);
//   }
//   return reverseBinary;
// }
