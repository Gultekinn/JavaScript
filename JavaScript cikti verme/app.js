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




